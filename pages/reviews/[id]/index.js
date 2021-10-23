import { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import { useRouter } from 'next/router';
import firebase from '../../../utils/firebase';
import {getStorage,ref,getDownloadURL,uploadBytes} from'firebase/storage';


const Index = ({review}) => {
  const [imageAsFile, setImageAsFile] = useState('');
  const [isButtonLoading, setIsButtonLoading] = useState(false);
  const [form, setForm] = useState({ review: review.review, reviewer: review.reviewer, image: review.image, priority: review.priority, anonymous: review.anonymous});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const router = useRouter();

  useEffect(() => {
      if(isSubmitting){
          if(Object.keys(errors).length === 0) {
            updateReview();
            
          }
          else {
            setIsSubmitting(false);
          }
      }

  }, [errors])

  const updateReview = async () => {
    try{
        const res = await fetch(`${process.env.DB_URL_API}/api/reviews/${router.query.id}`, {
          method: 'PUT',
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(form)
        })
        router.push("/reviews")

    }catch(error){
        console.log(error);
    }
  }
  const handleSubmit =(e) =>{ 
      e.preventDefault();
      if(form.image.length > 0 && form.reviewer.length > 0   && !form.anonymous)
        setForm({...form, priority: 1})
      else if(form.image.length === 0  && form.reviewer.length > 0   && !form.anonymous)
        setForm({...form, priority: 2})
      else
        setForm({...form, priority: 3})
      let errs = validate();
      setErrors(errs);
      setIsSubmitting(true);
  }
  const handleChange =(e) =>{
    e.persist()
    if(e.target.type==="checkbox"){
      e.target.checked?
        setForm({
         ...form,
         reviewer: "Anonymous",
         anonymous: true
       }) 
      :
    
        setForm({
          ...form,
          reviewer: "",
          anonymous: false
        })
      
    }else{

      setForm({
        ...form,
        [e.target.name]: e.target.value
      })
    }

  }

  const validate =() =>{
    let err ={};

    if(!form.review) {
      err.review = 'Review is required';
    }

    if(!form.reviewer) {
      err.reviewer = 'Reviwer is required';
    }

    return err;
  }

  const readImages=(e)=>{
    const image = e.target.files[0];
    setImageAsFile(imageAsFile => (image))
  }

  const handleImageName=(e)=>{
    const image = e.target.value;
    setForm({...form, image :(image)});
  }

  const handleUpload = e =>{
    e.preventDefault()
    const storage = getStorage(firebase);
    console.log('start of upload: '+imageAsFile.name)
    if(imageAsFile === '' ) {
      console.error(`not an image, the image file is a ${typeof(imageAsFile)}`)
    }
    uploadBytes(ref(storage,`images/${imageAsFile.name}`), imageAsFile).then((snapshot) => {
      console.log(`Uploaded ${imageAsFile.name}`);
    });
    setIsButtonLoading(true);
    setTimeout(()=>{
      getDownloadURL(ref(storage,`images/${imageAsFile.name}`))
          .then(fireBaseUrl => {
            setForm({...form, image: fireBaseUrl});
            alert("Upload successful!");
            setIsButtonLoading(false);
            })
          }, 5000)
  }

  return(
    <div className="container">
        <h1>Update Review</h1>
        <section>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
                    <textarea
                    className="form-control" 
                      error={errors.review ? { content: 'Please enter a review', 
                      pointing: 'below'} : null}
                      label ='Review'
                      placeholder='Review'
                      rows="12" 
                      name= 'review'
                      onChange={handleChange}
                      value = {form.review}
                      />
            </div>
            <div className="form-group reviewer">
                    <input
                    className="form-control" 
                      label='Reviewer'
                      placeholder='Reviewer' 
                      name='reviewer'
                      error={errors.reviewer ? { content: 'Please enter a reviewer', 
                      pointing: 'below'} : null}
                      onChange={handleChange}
                      value = {form.reviewer}
                      />
                      <span>
                  <input
                    name='reviewer'
                    type='checkbox'
                    checked={form.anonymous}
                    onChange={handleChange} />Anonymous?</span>
            </div>
            <div className="form-group">
            <input
                  type="text"
                  value={form.image}
                  onChange={handleImageName}/> 
                  <input
                  type="file"
                  accept="image/*"
                  onChange={readImages}/> 
                <button className="btn btn-primary" onClick={handleUpload}>{isButtonLoading ? "Uploading..." : "Upload"}</button>
            </div>
            <div className="form-group">
                    
            </div>
            <div className="buttonDiv">
              <button className="btn btn-primary" type='submit'> Update </button>
              <button className="btn btn-primary" onClick={() => router.back()}> Cancel </button>
            </div>
            </form>
        </section>
        <style jsx>{`
          text-align:center;
          .container{
            height: 100%;
          }
          section{
            margin: 0;
            padding:1rem;
            text-align: center;
            display: flex;
            flex-direction: column;
            background-color: #f3f3f3;
          }

          form{
            width: 100%;
            align-self:center;
            display: flex;
            flex-direction: column;
          }
          .form-group{
            align-self: center;
            width: 75%;
          }
          textarea{
            width:100%;
          }
          .btn{
            background-color: #f95960;
            border-color: #f95960;
            width: 20%;
            align-self: center;
          }
          input{
            width: 25%;
          }
          .reviewer{
            display: flex;
            flex-direction: row;
            justify-content: center;
          }
          span{
            width:20%;
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
          }

          .buttonDiv{
            display: flex;
            justify-content: space-evenly;
            width: 50%;
            align-self: center;
          }
          @media(max-width:900px) {
            .container,textarea{
              font-size: small;
            }
            .form-group{
              align-self: center;
              width: 100%;
            }
            input{
              width: 45%;
            }
            .btn{
              background-color: #f95960;
              border-color: #f95960;
              width: 50%;
              align-self: center;
              font-size: x-small;
            }
          }
        `}</style>
    </div>

  )
}

Index.getInitialProps = async ({query: {id} }) =>{
  const url = `${process.env.DB_URL_API}/api/reviews/${id}`
  const res = await fetch(url);
  const { data } = await res.json()

  return { review: data }
}
export default Index;