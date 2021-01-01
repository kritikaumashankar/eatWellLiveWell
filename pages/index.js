import Hero from '../components/Hero';
import { useState, useEffect } from 'react';
import images from '../images.json';
import Service from '../components/Service';
import Testimonial from '../components/Testimonial';

const Index = () => {
  const size = useWindowSize();
  return(
  <div className="container" >
    {Object.entries(images).map((index,value) => {
      if(index[0] == 'home')
       return(<Hero key="home" imgProp={index} width={size.width} height={size.height} bgColor={`rgba(0,0,0,0.3)`}/>)
    })}
    <Service />
    <Testimonial />
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