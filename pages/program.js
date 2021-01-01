import Hero from '../components/Hero';
import { useState, useEffect } from 'react';
import images from '../images.json';

const Program = () => {

  const size = useWindowSize();
  return(
  <div className="container" >
    {Object.entries(images).map((index,value) => {
      if(index[0] == 'services')
       return(<Hero key="services" imgProp={index} width={size.width} height={size.height}/>)
    })}
    <div id="program">
      <div id="section1">
      <h3>What can you expect from the program?</h3>
          <hr />
        <div id="programExpectation1">
          <div className="card text-white bg-info mb-3">
            <img id="image1" src="./pexels-vegan-liftz-2377165.jpg" />
            <div className="card-body">
              <h4 className="card-title">Customized plan</h4>
            </div>
          </div>
          <div className="card text-white bg-info mb-3">
            <img src="./pexels-mentatdgt-1311518.jpg"/>
            <div className="card-body">
              <h4 className="card-title">1:1 session</h4>
            </div>
          </div>
          <div className="card text-white bg-info mb-3">
            <img src="./assess-2372181_1920.jpg"/>
            <div className="card-body">
              <h4 className="card-title">Periodic Assessment</h4>
            </div>
          </div>
        </div>
        <div id="extraContent">
        <p><strong>All these require time, effort and patience.</strong> </p>
          <p>What is the guarantee it will work?  Answer is there is no guarantee. However, testimonials and feedback from several clients have reinforced my belief and the fact that it does work, provided you stick to the plan. </p>
          <p>Well, it isn’t that easy.  
            You won’t see results without you making a commitment and putting in the desired effort. </p>
          <p>You will begin appreciating the way you eat and live – yes, that is eat well and live well.  You will start being <strong>YOU</strong>.
          </p>
        </div>
      </div>
      <section id="programWork">
      <h3>How does the program work?</h3>
        <hr />
        <div id="workContent">
          <p>At a minimum, you will have to <strong>sign up for 3 months</strong> with me because you will need that much time to work on the proposed changes to see results.</p>
          <p>Program begins with an <strong>introductory session for me to understand your goal, your present challenges and where you are in your wellness journey</strong>. </p>
          <p>Based on this, I will create an <strong>initial plan that involves what / what not to eat, how much to eat, when to eat etc.</strong>  </p>
          <p>I will also suggest the <strong>necessary fitness regimen</strong> to supplement your nutritional changes to bring balance and strength. </p>
          <p>I will have you <strong>execute this plan for 2 weeks</strong> after which we will do a <strong>formal checkpoint to assess progress</strong>.</p>
          <p>A toolkit will be provided to you to <strong>measure the vital parameters once a week</strong>. </p>
          <p>In addition to formal sessions over video with me to discuss the plan and progress, I will respond to text messages to clarify any quick doubts you might have. </p> 
        </div>
        </section>

    </div>
    <style jsx>{`
      #program{
        margin-top:2vh;
        display: flex;
        flex-direction: column;
      }
      h3{
        text-align: center;
      }
      hr{
        width: 75%;
      }
      section{
        padding:0;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
      }
      
      p{
        font-size: 1.5vw;
        color: #5a5a5a;
      }
      #programExpectation{
        display: flex;
        flex-direction: row;
        margin-top:2vh;
      }
      #programWork{
        align-self:center;
        background-color:#6cc3d5;
        width:100%;
      }
      #programWork > h3{
        margin-top:2vh;
        color: #fff;
      }

      img{
        width:100%;
        height:35vh;
      }
      #twoImage{
        display:flex;
        justify-content: space-evenly;
      }
      #programExpectation1{
        display:flex;
        flex-direction: row;
        justify-content: space-evenly;
        margin: 5vh auto;
      }
      .card{
        width: 28vw;
        text-align: center;
        font-size: 1.25vw;
      }
      @media(max-width:1024px) {
        #programExpectation1 {
          display:flex;
          flex-direction: column;
          justify-content: center;
        }
        .card{
          width: 90%;
          align-self: center;
         
        }
        p{
          font-size: 3vh;
        }
      }
      
      #extraContent{
        width:75%;
        margin:auto;
        text-align: center;
      }
      #workContent{
        width:75%;
        margin:auto;
        color: #fff;
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


export default Program;