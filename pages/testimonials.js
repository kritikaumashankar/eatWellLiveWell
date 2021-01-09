import testimonials from '../testimonials.json';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft,faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import Hero from '../components/Hero';
import { motion } from 'framer-motion';

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
            <section id={testimonial[0]} key={testimonial[0]}>
              <motion.div
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: .2
                  }
                }}
                style={{ display: 'flex', flexDirection: 'column'}}>
                <FontAwesomeIcon icon={faQuoteLeft} size="xs" style={{width:'4%'}}/>
                {typeof review == "object" ? <p id="review">{review[0]}<br/><strong>{`'${review[1]}'`}</strong></p> : <p id="review">{review}</p>}
                <FontAwesomeIcon icon={faQuoteRight} size="xs" style={{width:'4%',alignSelf: 'flex-end'}}/>
                <p id="reviewer"><strong>~~{testimonial[1].reviewer}</strong></p>
                <hr id="sectionHr"/>
              </motion.div>
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
        }
        section:nth-child(odd){
          width:70%;
          text-align: end;
          align-self: flex-end;
          margin: 3vh 3vw;
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
          font-size: x-large;
        }
        .fa-quote-right{
          align-self: flex-end;
        }
        .fa-quote-left{
          align-self: flex-start;
        }
        @media(max-width:1024px) {
          section:nth-child(even){
            width:90%;
            text-align: center;
            align-self:center;
            margin: 3vh 3vw;
          }
          section:nth-child(odd){
            width:90%;
            text-align: center;
            align-self:center;
            margin: 3vh 3vw;
          }
          #review{
            width: 100%;
            align-self:center;
            font-size:2.5vh;
          }
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