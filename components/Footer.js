import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => (
  <>
      <div className="container">
        <span id="copyrightId">©Copyright 2021</span>
        <span id="emailSpan">abc@gmail.com</span>
        <FontAwesomeIcon icon={["fab", "instagram"]} />
      </div>
      <style jsx>
      {`
        .container{
          background-color: #35a988;
          height: 10vh;
          max-width: inherit;
          color: #fff;
          display: flex;
          flex-direction: row;
          justify-content: space-evenly;
        }
        #copyrightId{
          margin: 4vh 4vw;
        }
        #emailSpan{
          font-size:2rem;
          margin: 2.5vh 4vw;
        }
        i{
          width: 10%;
          height: 100%;
          color: #fff;
        }
        @media(max-width:1024px) {
          #emailSpan{
            font-size:1rem;
            margin: 4vh 4vw;
          }
        }
        `}
      </style>
  </>
);

export default Footer;