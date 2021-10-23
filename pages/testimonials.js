import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft,faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import Hero from '../components/Hero';
import { motion } from 'framer-motion';

const Testimonials =({testimonials}) =>{

  const size = useWindowSize();
 
  return(
    <div className="container">
      <Hero key={4} imgPage={4} width={size.width} height={size.height}/>
      <div className="testimonialContainer">
        <h2>Testimonials</h2>
        <h5>This is what my clients have to say about my program..</h5>
        <hr id="mainHr"/>
        {

            testimonials.sort((a,b)=>(a.priority - b.priority)).map((testimonial)=>{
          const review = testimonial.review.includes("\"") ? testimonial.review.split("\"") : testimonial.review;
          if(testimonial.image ===''|| testimonial.image ===null){
            return(
              <section id={testimonial._id} key={testimonial._id}>
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    transition: {
                      duration: .2
                    }
                  }}
                  >
                    <FontAwesomeIcon icon={faQuoteLeft} size="xs" style={{width:'1%',float: 'left'}}/>
                    {typeof review == "object" ? <p id="review1">{review[0]}<br/><strong>{`'${review[1]}'`}</strong></p> : <p id="review1">{review}</p>}
                    <FontAwesomeIcon icon={faQuoteRight} size="xs" style={{width:'1%',float: 'right'}}/>
                  <p id="reviewer"><strong>{testimonial.reviewer}</strong></p>

                </motion.div>
                <hr id="sectionHr"/>
              </section>
              )
            }else{
              return(
                <section id={testimonial._id} key={testimonial._id}>
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    transition: {
                      duration: .2
                    }
                  }}
                  
                  >
                  <div className="motionDiv" key={testimonial._id} id={testimonial._id}>
                    <img src={testimonial.image} />
                    <div className="reviewDetails">
                      <FontAwesomeIcon icon={faQuoteLeft} size="xs" style={{width:'2%',float: 'left'}}/>
                      {typeof review == "object" ? <p id="review">{review[0]}<br/><strong>{`'${review[1]}'`}</strong></p> : <p id="review">{review}</p>}
                      <FontAwesomeIcon icon={faQuoteRight} size="xs" style={{width:'2%',float: 'right'}}/>
                    <p id="reviewer"><strong>{testimonial.reviewer}</strong></p>
                    </div>
                  </div>
                </motion.div>
                  <hr id="sectionHr"/>
              </section>
              )
            }  
          })
        }
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
          width:80%;
          align-self:flex-start;
          text-align:start;
          margin: 3vh 3vw;
        }
        
        section:nth-child(odd){
          width:80%;
          align-self:flex-end;
          text-align:end;
          margin: 3vh 3vw;
        }
       
       div.motionDiv{
          display: flex;
          flex-direction: row;
          height:50%;
          justify-content: space-evenly;
        }
        
        h2{
          margin:3vh 0;
        }
        #review{
          width: 100%;
          align-self:center;
          margin-top: 3vh;

        }

        #review1{
          width: 100%;
          align-self:center;
          margin-top: 3vh;

        }

        #reviewer{
          text-align: end;
          margin: 2vh 15vw;
          font-size: x-large;
        }

        img{
          width:40%;
        }
        .reviewDetails{
          width:50%;
        }
      
        @media(max-width:900px) {
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

          div.motionDiv{
            display: flex;
            flex-direction: column;
          }
          img{
            width:100%;
          }
          .reviewDetails{
            width:100%;

          }
          #review{
            width: 100%;
            align-self:center;
            font-size:inherit;
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

Testimonials.getInitialProps = async () =>{
  const res = await fetch(process.env.DB_URL_API+'/api/reviews')
  const { data } = await res.json();
  return { testimonials: data };
}
export default Testimonials;