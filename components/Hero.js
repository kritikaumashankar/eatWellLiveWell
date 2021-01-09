import Link from 'next/link';
import images from '../images.json';
import { motion } from 'framer-motion';

const Hero = (props) =>{
  let title ="";
  let subTitle="";
  let imageUrl="";
  let title1;
  let buttonDisplay="";
  Object.entries(images).map((index,value) => { 
    if(value == props.imgPage)
     return(
        title =index[1].title,
        subTitle = index[1].subTitle,
        buttonDisplay = index[1].button,
        imageUrl = index[1].image_url
     )});
  if(title.includes("?"))
      title1 =title.split("?");  
  return(
    <div className='hero-container'>
      <motion.div  initial="hidden" animate="visible" variants={{
        hidden: {
          scale: .5,
          opacity: 0
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: .4
              }
            },
          }} style={{height:'100%'}}> 
          <div className='hero-text'>
          {typeof title1 == "object" ? title1.map((element,index) => {
            if(element !== "" )
            return( 
              <span key={index} className="title">{`${element}?`}</span>
            )})
            : <span className="title">{title}</span>}
          <span id="subtitle">{subTitle}</span><br/>
          {buttonDisplay == "" ? "" :(<Link href="/contact"><button type="button" className="btn btn-secondary" onLoad={showButton}>Work With Me!</button></Link>)}
      </div>
      </motion.div> 
      
      <style jsx>{`
          .hero-container{
            width:100%;
            height:60vh;
            background-color: lightgrey;
            background-image:url(./${imageUrl});
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat! important;
            background-attachment: fixed;
          }
          .hero-text{
            height: 100%;
            color: white;
            position: relative;
            text-align: center;
            background-color: ${props.bgColor};
            display: flex;
            flex-direction: column;
            justify-content: center;
          }

          .title{
            width: 75%;
            font-size: 2.5vw;
            align-self: center;
          }
          #subtitle{
            width: 75%;
            font-size: 1.5vw;
            align-self: center;
          }
          .btn{
            width: 20%;
            font-size: 1.75vw;
            align-self: center;
            background-color: #f95960;
            border-color: #f95960;
          }
          @media(max-width:1024px) {
            .title{
              width: 100%;
              font-size: 5vw;
              align-self: center;
            }
            #subtitle{
              width: 100%;
              font-size: 4vw;
              align-self: center;
            }
            .btn{
              width: 40%;
              font-size: 4vw;
              align-self: center;
              background-color: #f95960;
              border-color: #f95960;
            }
            .hero-container{
              width:100%;
              height:60vh;
              background-color: lightgrey;
              background-image:url(./${imageUrl});
              background-size: cover;
              background-position: center;
              background-repeat: no-repeat! important;
              background-attachment: inherit;
            }
          }
        `}
      </style>
    </div>
  )
}

const showButton = () => (
  <button type="button" className="btn btn-secondary" onLoad>Work With Me!</button>
)

export default Hero;