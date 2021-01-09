import Hero from '../components/Hero';
import { useState, useEffect } from 'react';
import images from '../images.json';
import fetch from 'isomorphic-fetch';


const Contact = () => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  })
  const [inputs, setInputs] = useState({
    fname:'',
    lname:'',
    email: '',
    phone:'',
    message: ''
  })

  const handleResponse = (status, msg) => {
    if (status === 200) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg }
      })
      setInputs({
        fname:'',
        lname:'',
        email: '',
        phone:'',
        message: ''
      })
    } else {
      setStatus({
        info: { error: true, msg: msg }
      })
    }
  }

  const handleOnChange = e => {
    e.persist()
    setInputs(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }))
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null }
    })
  }
  const handleOnSubmit = async e => {
    e.preventDefault()
    setStatus(prevStatus => ({ ...prevStatus, submitting: true }))
    const res = await fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(inputs)
    })
    const text = await res.text()
    handleResponse(res.status, text)
  }

  const size = useWindowSize();
return(
  <div className="container" >
      <Hero key={3} imgPage={3} width={size.width} height={size.height}/>
      <section>
        <form onSubmit={handleOnSubmit}>
          <fieldset>
            <legend>Have Questions? Get In Touch! </legend>
            <span>Fill out the form below with your query and I will get back to you.</span>
            <div className="form-group name">
              <input 
                  type="text" 
                  className="form-control" 
                  id="fname" 
                  required 
                  aria-describedby="fnameHelp" 
                  onChange={handleOnChange}
                  value={inputs.fname}
                  placeholder="First Name"/> 
                  <input 
                  type="text" 
                  className="form-control" 
                  id="lname" 
                  required 
                  aria-describedby="lnameHelp" 
                  onChange={handleOnChange}
                  value={inputs.lname}
                  placeholder="Last Name"/>
            </div>
            <div className="form-group">
              <input 
                  type="email" 
                  className="form-control" 
                  id="email" 
                  required 
                  aria-describedby="emailHelp" 
                  onChange={handleOnChange}
                  value={inputs.email}
                  placeholder="Email"/>
            </div>
            <div className="form-group">
              <input 
                  type="text" 
                  className="form-control" 
                  id="phone" 
                  required 
                  aria-describedby="phoneHelp" 
                  onChange={handleOnChange}
                  value={inputs.phone}
                  placeholder="Phone"/>
            </div>
            
            <div className="form-group">
              <textarea 
                  className="form-control" 
                  id="message" 
                  name="message"
                  rows="3" required 
                  onChange={handleOnChange} 
                  value={inputs.message}
                  placeholder="Type your message here..."></textarea>
            </div>
            <button 
                type="submit" 
                className="btn btn-primary">{!status.submitting
                  ? !status.submitted
                    ? 'Submit'
                    : 'Submitted'
                  : 'Submitting...'}</button>
            </fieldset>
          </form>
          {status.info.error && (
            <div className="error">Error: {status.info.msg}</div>
          )}
          {!status.info.error && status.info.msg && (
            <div className="success">{status.info.msg}</div>
          )}
        </section>
    <style jsx>{`
      section{
        margin: 0;
        padding:1rem;
        text-align: center;
        display: flex;
        flex-direction: column;
        background-color: #f3f3f3;
      }
      .hero-text{
        background-color: none! important;
      }
      form{
        width: 50%;
        align-self:center;
      }
      .btn{
        background-color: #f95960;
        border-color: #f95960;
      }
      #fname,#lname{
        width:50%;
      }
      .name{
        display:flex;
        flex-direction:row;
      }
    span{
      padding: 0rem;
      margin: 1rem;
      bottom: 0.5;
      display: inline-block;
    }

    @media (max-width: 900px){
      form{
        width: 88%;
        align-self:center;
      }
    }
    `}
    </style>
    
  </div>
)}
const useWindowSize = () =>{
  const [windowSize, setWindowSize] = useState({width : undefined, height: undefined});
  
  useEffect(() => {
    if(typeof window !== 'undefined'){
      function handleSize(){
        setWindowSize({width : window.innerWidth,height: window.innerHeight});
      }
      window.addEventListener("resize",handleSize);
      return () => {            
        window.removeEventListener('resize', handleSize);  
      }  
    }
  },[]);

  return windowSize;
}


export default Contact;