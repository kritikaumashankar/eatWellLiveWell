import { useState, useEffect,useRef } from 'react';
import fetch from 'isomorphic-fetch';
import { useRouter } from 'next/router';
import firebase from "../utils/firebase";
import {getStorage,ref,getDownloadURL,uploadBytes} from'firebase/storage';

const NewReview = () => {
  const [imageAsFile, setImageAsFile] = useState('')
  const [isButtonLoading, setIsButtonLoading] = useState(false);
  const ref1 = useRef();
  const [form, setForm] = useState({ review:'', reviewer: '', image: '', priority: 0, anonymous:false})
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const router = useRouter();

  useEffect(() => {
    if(isSubmitting){
      if(Object.keys(errors).length === 0) {
          createReview();
          setForm({review:'', reviewer: '',image: '',priority: 0, anonymous:false}) 
          reset();
          alert('Success');
            
        }
        else {
          setIsSubmitting(false);
        }
      }
    }, [errors])
    

const createReview = async () => {
  try{
      const res = await fetch(`${process.env.DB_URL_API}/api/reviews/`, {
        method: 'POST',
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

  const handleOnChange = e => {
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

  const handleOnSubmit =(e) =>{ 
    e.preventDefault();
      if(form.image.length > 0 && form.reviewer.length > 0 && !form.anonymous)
        setForm({...form, priority: 1})
      else if(form.image.length === 0  && form.reviewer.length > 0   && !form.anonymous)
        setForm({...form, priority: 2})
      else
        setForm({...form, priority: 3})
    let errs = validate();
    setErrors(errs);
    setIsSubmitting(true);
  }

  //const size = useWindowSize();
  const validate =() =>{
    let err ={};

    if(!form.review) {
      err.title = 'Review is required';
    }

    if(!form.reviewer) {
      err.reviewer = 'Reviewer is required';
    }

    return err;
  }

  const readImages=(e)=>{
    const image = e.target.files[0];
    setImageAsFile(imageAsFile => (image))
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
            setForm({...form, image: fireBaseUrl})
            })
            alert("Upload successful!")
            setIsButtonLoading(false);
          }, 10000)
          
  }

  const reset = () => {
    ref1.current.value = "";
  };

  return(
    <>
    <section>
        <h4>Add a new Review</h4>
        <div>
         <form onSubmit={handleOnSubmit}>
            <fieldset>
              <div className="form-group">
                <textarea
                  fluid="true"
                  error={errors.title ? { content: 'Please enter a review', 
                  pointing: 'below'} : null}
                  label ='Review'
                  placeholder='Review'
                  name= 'review'
                  rows='10'
                  onChange={handleOnChange}
                  value={form.review}
                      />
              </div>
              <div className="form-group reviewer">
                <input
                  type="text"
                  fluid="true"
                  label='Reviewer'
                  placeholder='Reviewer' 
                  name='reviewer'
                  error={errors.reviewer ? { content: 'Please enter a reviewer', 
                  pointing: 'below'} : null}
                  onChange={handleOnChange}
                  value={form.reviewer}
                      />
                  <span>
                  <input
                    name='reviewer'
                    type='checkbox'
                    checked={form.anonymous}
                    onChange={handleOnChange} />Anonymous?</span>
              </div>
              <div className="form-group">
                <input
                  type="file"
                  accept="image/*"
                  ref={ref1}
                  onChange={readImages}/> 
                <button className="btn btn-primary" onClick={handleUpload}>{isButtonLoading ? "Uploading..." : "Upload"}</button>
              </div>
              <div className="form-group">
              </div>
              <button 
                type="submit" 
                className="btn btn-primary">Add</button>
            </fieldset>
         </form>
        </div>
    </section>
    <style jsx>{`
      section{
        margin: 2rem 1rem;
      }
      textarea{
        width:50%;
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
      .btn{
        background-color: #f95960;
        border-color: #f95960;
        color: white;
        line-height: 1.5;
        margin: 0.5rem;
      }
      @media(max-width:900px) {
        input{
          width: 50%;
        }
        textarea{
          width:100%;
        }
        .btn{
          font-size: xx-small;
        }
      }
    `}</style>
      </>
  )
}

export default NewReview;