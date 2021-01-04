import Hero from '../components/Hero';
import { useState, useEffect } from 'react';
import images from '../images.json';


const About =() => {

  const size = useWindowSize();
  return(
  <div className="container" >
    <Hero key={1} imgPage={1} width={size.width} height={size.height} bgColor={`rgba(0,0,0,0.2)`}/>
    <section id="aboutMe">
      <h2>Hi There! I am Sushma Ramaswamy!</h2>
      <h5>I am a Precision Nutrition© certified consultant.</h5> 
      <hr />
      <div id="content">
        <img id="about" src="./sushma.jpeg"/>
        <div id="aboutContent">
          <p>Besides being focused on nutrition, I do strength training 3 days a week and do yoga and meditation every day.</p>  
          <p>My aim is to make a difference to people’s lives and how they approach diet, fitness and being well.</p>  
          <p>My journey with wellness started several years ago when small, conscious changes to my dietary habits yielded 
            positive results to my daily functioning and since then, I have embarked on understanding and learning more about 
            nutrition.</p>
          <p>Over the years, one of the things I have realized is, while there are many diet and nutrition 
            programs available for weight loss, there is no magic pill and programs have to be customized based on the 
            individual and their needs. </p>
            <p>Through my Eat Well, Live Well program, I hope to help you know more about your body 
            and make necessary changes to lead a better and healthy life.</p>
        </div>
      </div>
    </section>
    <style jsx>{`
      section{
        margin:0;
        padding:0;
        text-align: center;
      }

      h2{
        margin-top: 3vh;
      }

      #about{
        width: 25vw;
        height: 60vh;
        border-color: #9E9E9E;
        border-style: solid;
        border-radius: 100%;
        margin-bottom:2vh;
      }
      #aboutContent{
        width: 50%;
        font-size: 1.35vw;
      }
      p{
        line-height: 2rem;
        color: #5a5a5a;
      }
      #content{
        display:flex;
        flex-direction: row;
        justify-content: space-evenly;
        position: relative;
        top: 1vh;
      }
      @media(max-width:1024px) {
        #content{
          display:flex;
          flex-direction: column;
          justify-content: center;
          position: relative;
          top: 2vh;
        }
        #aboutContent{
          width: 100%;
          font-size: 3vh;
          margin-top:1vh;
        }
          p{
            line-height: 4vh;
            color: #5a5a5a;
          }
        #about{
          width: 75%;
          height: 50vh;
          border-color: #9E9E9E;
          border-style: solid;
          border-radius: 100%;
          align-self: center;
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


export default About;