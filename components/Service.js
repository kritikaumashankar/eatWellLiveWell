import Link from 'next/link';
const Service =() => (
  <div className="container">
    <section>
      {/* <h3>About Eat Well, Live Well</h3>  */}
      <img src="./logo.jpg" />
    </section>
    <hr />
    <section id="aboutEatWell">
        <p> Eat Well, Live Well is all about eating a balanced diet and maintaining a healthy lifestyle. After years of learning about nutrition, fitness and wellness, I am well positioned to help people like you see changes in the way you lead a healthy life.
          Improvement goals such as weight loss or staying fit starts with small steps and a tailored program to suit one’s own requirements and that is what I provide with the Eat Well, Live Well program.</p>
          <Link href="/program"><button type="button" className="btn btn-secondary">Learn More</button></Link>
    </section>
  
  <style jsx>{`
    .container{
      background-color: #fff;
      height:60vh;
      display: flex;
      flex-direction: row;
      jusify-content:space-evenly;
    }

    hr{ 
      border:         none;
      border-left:    1px solid hsla(200, 10%, 50%,100);
      height: 80%;
      width: 5px;
      position: relative;
      top: 5vh;      
    }

    section{
      width: 45%;
      margin: 2vh 2vw;
      display: flex;
      flex-direction: column;
      top:0! important;
    }
    h3{
      width: 100%;
      margin: 3vh auto;
      text-align: center;
      font-family: 'Charmonman', cursive;
    }

    img{
      margin: 2vh auto;
      width:40vw;
      height:50vh;
    }
    p{
      font-size: 1.6vw;
      line-height: 35px;
      margin: 3vh 3vw;
    }
    .btn{
      background-color:#f95960;
      border-color: #f95960;
      width:50%;
      align-self:center;
    }
    @media(max-width:1024px) {
      .container{
        background-color:#fff;
        height:100%;
        display: flex;
        flex-direction: column;
        jusify-content:space-evenly;

      }
      h3{
      width: 80%;
      height: 50%;
      margin: 1vh;
      text-align: center;
      position: relative;
      top: 0;
      font-size: 6vw;
      }
      section{
        width: 100%;
        margin: 1vh 1vw;
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
      p{
        font-size: 4vw;
        line-height: 35px;
  
      }
      img{
        width:75%;
        height:30vh;
      }
    }
  
  `}</style>
  </div>
);

export default Service;