import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';

const Footer = () => (
  <>
      <div className="container">
        <span id="copyrightId">©Copyright 2021</span>
        <span id="emailSpan">abc@gmail.com</span>
        <a href="https://www.instagram.com/sush_rams/"><FontAwesomeIcon icon={faInstagram} /></a>
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
          justify-content: space-around;
        }
        #copyrightId{
          margin: 4vh 4vw;
          font-size:1.5vh;
        }
        #emailSpan{
          font-size:1.5vh;
          margin: 4vh 4vw;
        }
        i{
          width: 10%;
          height: 100%;
          color: #fff;
        }
        a{
          width: 5%;
           height: 75%;
            margin: 3.5vh 0;
        }
        @media(max-width:1024px) {
          #emailSpan{
            font-size:1.25vh;
            margin: 4vh 4vw;
          }
          #copyrightId{
            margin: 4vh 4vw;
            font-size:1.25vh;
          }
          a{
            width: 5%;
             height: 35%;
              margin: 3vh 0;
          }
          
        }
        `}
      </style>
  </>
);

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
      width: 10%;
      height: 50%;
      margin: 2vh 0;
      @media(max-width:1024px) {
        width: 10%;
        height: 35%;
        margin: 3vh 0;
      }

    
`
export default Footer;