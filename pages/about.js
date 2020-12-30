import Hero from '../components/Hero';
import { useState, useEffect } from 'react';
import images from '../images.json';

const About =() => {

  const size = useWindowSize();
  return(
  <div className="container" >
    {Object.entries(images).map((index,value) => {
      if(index[0] == 'about')
       return(<Hero key="about" imgProp={index} width={size.width} height={size.height}/>)
    })}
    <section>
      <p>I am Sushma Subramaniam and I am a Precision Nutrition© certified consultant. Besides being focused on nutrition,
         I do strength training 3 days a week and do yoga and meditation every day.  
         My aim is to make a difference to people’s lives and how they approach diet, fitness and being well.  
         My journey with wellness started several years ago when small, conscious changes to my dietary habits yielded 
         positive results to my daily functioning and since then, I have embarked on understanding and learning more about 
         nutrition.  Over the years, one of the things I have realized is, while there are many diet and nutrition 
         programs available for weight loss, there is no magic pill and programs have to be customized based on the 
         individual and their needs. Through my Eat Well, Live Well program, I hope to help you know more about your body 
         and make necessary changes to lead a better and healthy life.
</p>
    </section>
    <style jsx>{`
      section{
        margin: 2rem;
        padding:0;
        text-align: center;
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