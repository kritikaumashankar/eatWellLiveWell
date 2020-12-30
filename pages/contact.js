import Hero from '../components/Hero';
import { useState, useEffect } from 'react';
import images from '../images.json';

const Contact = () => {

  const size = useWindowSize();
  return(
  <div className="container" >
    {Object.entries(images).map((index,value) => {
      if(index[0] == 'contact')
       return(<Hero key="contact" imgProp={index} width={size.width} height={size.height}/>)
    })}
      <section>
        <form>
          <fieldset>
            <legend>Contact</legend>
            <div className="form-group">
              <label for="name">Name</label>
              <input type="text" className="form-control" id="name" aria-describedby="nameHelp" placeholder="Enter your full name"/>
            </div>
            <div className="form-group">
              <label for="email">Email address</label>
              <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"/>
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>

            <div className="form-group">
              <label for="subject">Subject</label>
              <input type="text" className="form-control" id="subject" aria-describedby="subjectHelp" placeholder="Enter subject"/>
            </div>
            
            <div className="form-group">
              <label for="exampleTextarea">Example textarea</label>
              <textarea className="form-control" id="exampleTextarea" rows="3"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            </fieldset>
          </form>
        </section>
    <style jsx>{`
      section{
        margin: 1rem;
        padding:0;
        text-align: center;
        display: flex;
        justify-content: center;
      }
      form{
        width: 50%;
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