import Link from 'next/link';

const AboutSushma = () =>{
  return(
    <>
      <div className="container">
        <section id="aboutSushma">
          <img src="./sushma_main.jpeg" />
            <h4> Sushma</h4>
            <h6>Precision Nutrition Certified Consultant </h6>
            <Link href="/about"><button type="button" className="btn btn-secondary">Know More About Me</button></Link>
        </section>
      
      <style jsx>{`
        .container{
          background-color: #fff;
          height:70vh;
          display: flex;
          flex-direction: row;
          jusify-content:space-evenly;
          background-image:url(./brooke-lark-08bOYnH_r_E-unsplash.jpg);
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat! important;
          background-attachment: inherit;
      
        }

        hr{ 
          border:         none;
          border-left:    1px solid hsla(200, 10%, 50%,100);
          height: 80%;
          width: 5px;
          position: relative;
          top: 5vh;      
        }

        
        #aboutSushma{
          width: 60%;
          height:100%;
          margin-left: auto;
          position:relative;
          top: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        h4{
          width: 100%;
          margin: 1vh auto;
          text-align: center;
        }
        h6{
          width: 100%;
          margin: 1.5vh auto;
          text-align: center;
        }

        img{
          margin: 2vh auto;
          width:30vw;
          height:45vh;
          border-radius: 25%;
        }
        p{
          font-size: inherit;
          line-height: 35px;
          margin: 3vh 3vw;
        }
        .btn{
          background-color:#f95960;
          border-color: #f95960;
          width:40%;
          align-self:center;
        }
        @media(max-width:1024px) {
          .container{
            background-color:#fff;
            height:100%;
            display: flex;
            flex-direction: column-reverse;
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
            width:65%;
            height:42vh;
          }
          #aboutSushma{
            height:100%;
            position:relative;
            top: 0vh;
          }
          .btn{
            background-color:#f95960;
            border-color: #f95960;
            width:50%;
            align-self:center;
          }
        }
        @media(max-width:823px) {
          .container{
            background-color:#fff;
            height:100%;
            display: flex;
            flex-direction: column-reverse;
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
            width: inherit;
            height: auto;
          }
          #aboutSushma{
            height:100%;
            position:relative;
            top: 0vh;
          }
          .btn{
            background-color:#f95960;
            border-color: #f95960;
            width:inherit;
            align-self:center;
          }
        }
      
        `}</style>
      </div>
    </>
  )
}

export default AboutSushma;