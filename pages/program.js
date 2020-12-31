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
      {/* <div id="programExpectation">
        <section>
          <h5>What can you expect from the program?</h5>
          <hr />
          <p>Based on whatever your goal is,</p>
          <ul>
            <li>1 : 1 sessions</li>
            <li>Customized plan for you and you only.</li>
            <li>Regular discussions and periodic checkpoints to assess various diet and health parameters, both you and I will be able to assess your progress and decide course corrections to the plan if need be.</li>
            <li>Gain a better understanding of nutrition and health.</li>
            </ul>
          <p>All these require time, effort and patience. </p>
          <p>What is the guarantee it will work?  Answer is there is no guarantee. However, testimonials and feedback from several clients have reinforced my belief and the fact that it does work, provided you stick to the plan. </p>
          <p>Well, it isn’t that easy.  
            You won’t see results without you making a commitment and putting in the desired effort. </p>
          <p>You will begin appreciating the way you eat and live – yes, that is eat well and live well.  You will start being <strong>YOU</strong>.
          </p>
        </section>
          <section>
            <img id="image1" src="./pexels-vegan-liftz-2377165.jpg" />
            <div id="twoImage">
              <img src="./pexels-mentatdgt-1311518.jpg"/>
              <img src="./assess-2372181_1920.jpg"/>
            </div>
          </section>
      </div> */}
      <div id="section1">
      <h3>What can you expect from the program?</h3>
          <hr />
        <div id="programExpectation1">
          <div className="card text-white bg-info mb-3">
            <img id="image1" src="./pexels-vegan-liftz-2377165.jpg" />
            <div className="card-body">
              <h4 className="card-title">Customized plan.</h4>
              <p className="card-text">Based on whatever your goal is, I will create a customized plan for you.  This plan is for you and you only. </p>
            </div>
          </div>
          <div className="card text-white bg-info mb-3">
            <img src="./pexels-mentatdgt-1311518.jpg"/>
            <div className="card-body">
              <h4 className="card-title">1:1 session</h4>
              <p className="card-text">Formal sessions over video with me to discuss the plan and progress.</p>
            </div>
          </div>
          <div className="card text-white bg-info mb-3">
            <img src="./assess-2372181_1920.jpg"/>
            <div className="card-body">
              <h4 className="card-title">Assessment</h4>
              <p className="card-text">With regular discussions and periodic checkpoints to assess various diet and health parameters, both you and I will be able to assess your progress and decide course corrections to the plan if need be.</p>
            </div>
          </div>
        </div>
        <div id="extraContent">
        <p>All these require time, effort and patience. </p>
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
          <p>At a minimum, you will have to sign up for 3 months with me  because you will need that much time to work on the proposed changes to see results.</p>
          <p>  Program begins with an introductory session for me to understand your goal, your present challenges and where you are in your wellness journey. </p>
          <p> Based on this, I will create an initial plan that involves what / what not to eat, how much to eat, when to eat etc.  </p>
          <p>I will also suggest the necessary fitness regimen to supplement your nutritional changes to bring balance and strength. </p>
          <p> I will have you execute this plan for 2 weeks after which we will do a formal checkpoint to assess progress.</p>
          <p>  A toolkit will be provided to you to measure the vital parameters once a week. </p>
          <p>In addition to formal sessions over video with me to discuss the plan and progress, I will respond to text messages to clarify any quick doubts you might have. </p> 
        </div>
        </section>

    </div>
    <style jsx>{`
      #program{
        display: flex;
        flex-direction: column;
        font-size: 1.25rem;
      }
      h3{
        text-align: center;
      }
      hr{
        width: 100%;
      }
      section{
        margin: 2rem;
        padding:0;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
      }
      
      #aboutEatWell{
        font-size: 1.5rem;
        position: relative;
        text-align: center;
      }
      #programExpectation{
        display: flex;
        flex-direction: row;
        
      }
      #programWork{
        align-self:center;
        text-align: center;
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
        margin: 5rem auto;
      }
      .card{
        width: 28vw;
        text-align: center;
        font-size: 1.25rem;
      }
      @media(max-width:768px) {
        #programExpectation1 {
          display:flex;
          flex-direction: column;
          justify-content: center;
        }
        .card{
          width: 90%;
          align-self: center;
         
        }
      }
      #section1{
        margin: 2rem 0;
      }
      #extraContent{
        width:60%;
        margin:auto;
        text-align: center;
      }
      #workContent{
        width:70%;
        margin:auto;
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