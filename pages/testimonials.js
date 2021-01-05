import testimonials from '../testimonials.json';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft,faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import Hero from '../components/Hero';

const Testimonials =() =>{

  const size = useWindowSize();
  return(
    <div className="container">
      <Hero key={4} imgPage={4} width={size.width} height={size.height}/>
      <div className="testimonialContainer">
        <h2>Testimonials</h2>
        <h5>This is what my clients have to say about my program..</h5>
        <hr id="mainHr"/>
        {Object.entries(testimonials).map((testimonial,index)=>{
          const review = testimonial[1].review.includes("\"") ? testimonial[1].review.split("\"") : testimonial[1].review;
          return(
            <section key={index}>
              <FontAwesomeIcon icon={faQuoteLeft} size="xs" style={{width:'4%'}}/>
              {typeof review == "object" ? <p id="review">{review[0]}<br/><strong>{`'${review[1]}'`}</strong></p> : <p id="review">{review}</p>}
              <FontAwesomeIcon icon={faQuoteRight} size="xs" style={{width:'4%',alignSelf: 'flex-end'}}/>
              <p id="reviewer"><strong>~~{testimonial[1].reviewer}</strong></p>
              <hr id="sectionHr"/>
            </section>
          )}
          )}
      </div>    
      <style jsx>{`
        .testimonialContainer{
          text-align:center;
          display: flex;
          flex-direction:column;
          background-color:#f3f3f3;
          margin: 0 2vw;
        }

        #mainHr,#sectionHr{
          width:95%;
        }
        section:nth-child(even){
          width:70%;
          text-align: start;
          align-self: flex-start;
          margin: 3vh 3vw;
          display:flex;
          flex-direction: column;
        }
        section:nth-child(odd){
          width:70%;
          text-align: end;
          align-self: flex-end;
          margin: 3vh 3vw;
          display:flex;
          flex-direction: column;
        }
        h2{
          margin:3vh 0;
        }
        #review{
          width: 80%;
          align-self:center;

        }

        #reviewer{
          text-align: end;
          margin: 2vh 15vw;
          font-size: x  -large;
        }
        .fa-quote-right{
          align-self: flex-end;
        }
      `}
      </style>
    </div>
  )
}
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
export default Testimonials;