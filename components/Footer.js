import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';

const Footer = () => (
  <>
      <div className="container">
        <div id="copyrightDiv">
          <span className="copyright">©Copyright 2021</span><br/>
          <img id="logo" src="./logo.jpg" />
          <span className="copyright"> Eat Well, Live Well</span>
        </div>
        <span id="emailSpan">sushrams10@gmail.com</span>
        <a href="https://www.instagram.com/sush_rams/"><FontAwesomeIcon icon={faInstagram} size="xs"/></a>
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

        #copyrightDiv{
          width:30%;
          margin: 2vh 0;
        }
        .copyright{
          margin: 4vh 0;
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
          width: 2%;
          margin: 2.5vh 0;
        }

        #logo{
          width: 5%;
          height:35%;
        }
        @media(max-width:1024px) {
          #emailSpan{
            font-size:1.25vh;
            margin: 4vh 4vw;
          }
          .copyright{
            margin: 0;
            font-size:1.25vh;
          }
          a{
            width: 5%;
            margin: 3vh 0;
          }
          #logo{
            width: 15%;
            height:35%;
          }
          
        }
        `}
      </style>
  </>
);

// const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
//       width: 10%;
//       height: 50%;
//       margin: 2vh 0;
//       @media(max-width:1024px) {
//         width: 10%;
//         height: 35%;
//         margin: 3vh 0;
//       }

    
// `
export default Footer;