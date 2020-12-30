import Hero from '../components/Hero';
import { useState, useEffect } from 'react';
import images from '../images.json';

const Index = () => {
  const size = useWindowSize();
  return(
  <div className="container" >
    {Object.entries(images).map((index,value) => {
      if(index[0] == 'home')
       return(<Hero key="home" imgProp={index} width={size.width} height={size.height}/>)
    })}
    <section>
      
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

export default Index;