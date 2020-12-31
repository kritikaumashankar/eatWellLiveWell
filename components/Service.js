import Link from 'next/link';
const Service =() => (
  <div className="container">
    <h3>About Eat Well, Live Well</h3> 
    <hr />
    <section id="aboutEatWell">
        <p> Eat Well, Live Well is all about eating a balanced diet and maintaining a healthy lifestyle. After years of learning about nutrition, fitness and wellness, I am well positioned to help people like you see changes in the way you lead a healthy life.
          Improvement goals such as weight loss or staying fit starts with small steps and a tailored program to suit one’s own requirements and that is what I provide with the Eat Well, Live Well program.</p>
          <Link href="/program"><button type="button" className="btn btn-secondary">Learn More</button></Link>
    </section>
  
  <style jsx>{`
    .container{
      background-color:#fff;
      height:50vh;
      display: flex;
      flex-direction: row;
      jusify-content:space-evenly;
      border: 2px solid #000;
    }

    hr{ 
      border:         none;
      border-left:    1px solid hsla(200, 10%, 50%,100);
      height:         85%;
      width:          1px;       
    }

    section{
      width: 50%;
      margin: 2rem;
      display: flex;
      flex-direction: column;
      top:0! important;
    }
    h3{
      width: 50%;
      height: 50%;
      margin: 2rem;
      text-align: center;
      position: relative;
      top: 15vh;
    }

    p{
      font-size: 1.25rem;
      line-height: 35px;

    }
    .btn{
      background-color:#f95960;
      border-color: #f95960;
    }
    @media(max-width:1000px) {
      .container{
        background-color:#fff;
        height:100vh;
        display: flex;
        flex-direction: column;
        jusify-content:space-evenly;
        border: 2px solid #000;

      }
      h3{
      width: 80%;
      height: 50%;
      margin: 1rem;
      text-align: center;
      position: relative;
      top: 0;
      }
      section{
        width: 90%;
        margin: 1rem;
        display: flex;
        flex-direction: column;
        top: 12vh;
        position: relative;
      }
      hr{
        border-left: 1px solid hsla(200,10%,50%,100);
        width: 100%;
        height:0;
      }
    }
  
  `}</style>
  </div>
);

export default Service;