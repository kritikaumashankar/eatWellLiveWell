
const Hero = (props) =>{

  return(
    <div className='hero-container'>
    <div className='hero-text'>
        <span id="title">{props.imgProp[1].title} </span><br/>
        <span id="subtitle">{props.imgProp[1].subTitle}</span><br/>
        {props.imgProp[1].button == "" ? "" :(<button type="button" className="btn btn-secondary" onLoad={showButton}>Work With Me!</button>)}
      </div>
      
      <style jsx>{`
          .hero-container{
            width:100vw;
            height:50vh;
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
            background-color: rgba(0,0,0,0.2);
            display: flex;
            flex-direction: column;
            justify-content: center;
          }

          #title{
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
            width: 35%;
            font-size: 1.75vw;
            align-self: center;
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