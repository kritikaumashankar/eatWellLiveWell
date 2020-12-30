import Hero from '../components/Hero';
import { useState, useEffect } from 'react';
import images from '../images.json';

const Services = () => {

  const size = useWindowSize();
  return(
  <div className="container" >
    {Object.entries(images).map((index,value) => {
      if(index[0] == 'services')
       return(<Hero key="services" imgProp={index} width={size.width} height={size.height}/>)
    })}
    <section>
      <p>If your goal is to eat a balanced diet, you will get it.  If your goal is to lose weight, you will get it. 
        If your goal is to adopt a healthy lifestyle, you will get it.  Well, it isn’t that easy.  
        You won’t see results without you making a commitment and putting in the desired effort.  </p>
<p>It all starts with YOU.</p>
<p>You have to be ready for the change and put in the required work. Based on whatever your goal is, I will create a customized plan for you.  This plan is for you and you only. With regular discussions and periodic checkpoints to assess various diet and health parameters, both you and I will be able to assess your progress and decide course corrections to the plan if need be.  All these require time, effort and patience. </p>
<p>What is the guarantee it will work?  Answer is there is no guarantee. However, testimonials and feedback from several clients have reinforced my belief and the fact that it does work, provided you stick to the plan. </p>
<p>Besides results, you will gain a better understanding of nutrition and health. You will begin appreciating the way you eat and live – yes, that is eat well and live well.  You will start being YOU.

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


export default Services;