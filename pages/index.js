import Hero from '../components/Hero';
import { useState, useEffect } from 'react';

import Service from '../components/Service';
import AboutSushma from '../components/AboutSushma';
import Testimonial from '../components/Testimonial';

const Index = ({testimonials}) => {
  const size = useWindowSize();
  
  return(
  <div className="container" >
    <Hero key={0} imgPage={0} width={size.width} height={size.height} bgColor={`rgba(0,0,0,0.4)`}/>
    <Service /> 
    <AboutSushma />
    <Testimonial testimonials={testimonials}/> 
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
Index.getInitialProps = async () =>{
  const res = await fetch(`${process.env.DB_URL_API}}/api/reviews`)
  const { data } = await res.json();
  return { testimonials: data };
}
export default Index;