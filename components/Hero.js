import Link from 'next/link';

const Hero = (props) =>{
  let title1 =props.imgProp[1].title;
  if(props.imgProp[1].title.includes("?"))
    title1 =props.imgProp[1].title.split("?");  
  return(
    <div className='hero-container'>
    <div className='hero-text'>
        {typeof title1 !== "string" ? title1.map((element) => (
          element!==""?<span className="title">{element}?</span>:""
        )):<span className="title">{title1}</span>}
        <span id="subtitle">{props.imgProp[1].subTitle}</span><br/>
        {props.imgProp[1].button == "" ? "" :(<Link href="/contact"><button type="button" className="btn btn-secondary" onLoad={showButton}>Work With Me!</button></Link>)}
      </div>
      
      <style jsx>{`
          .hero-container{
            width:100%;
            height:60vh;
            background-color: lightgrey;
            background-image:url(${process.env.PUBLIC_URL}${props.imgProp[1].image_url});
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat! important;
            background-attachment: fixed;
        }
          }
          .hero-text{
            height: 100%;
            color: white;
            position: relative;
            text-align: center;
            background-color: ${props.bgColor};
            display: flex;
            flex-direction: column;
            justify-content: center;
          }

          .title{
            width: 75%;
            font-size: 2.5vw;
            align-self: center;
          }
          #subtitle{
            width: 75%;
            font-size: 1.5vw;
            align-self: center;
          }
          .btn{
            width: 20%;
            font-size: 1.75vw;
            align-self: center;
            background-color: #f95960;
            border-color: #f95960;
          }
          @media(max-width:1024px) {
            .title{
              width: 100%;
              font-size: 5vw;
              align-self: center;
            }
            #subtitle{
              width: 100%;
              font-size: 4vw;
              align-self: center;
            }
            .btn{
              width: 40%;
              font-size: 4vw;
              align-self: center;
              background-color: #f95960;
              border-color: #f95960;
            }
          }
        `}
      </style>
    </div>
  )
}

const showButton = () => (
  <button type="button" className="btn btn-secondary" onLoad>Work With Me!</button>
)

export default Hero;