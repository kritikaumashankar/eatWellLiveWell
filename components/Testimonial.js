import Carousel from 'react-bootstrap/Carousel';
import testimonials from '../testimonials.json';
import styled from 'styled-components';
const Testimonial =() => {
  
  return(
  <div id="testimonialContainer">
    <Carousel>
    {Object.entries(testimonials).map(testimonial => ( 
       <StyledCarouselItem>
           <section>
              <h2>What Clients Say...</h2>
              <i class="fas fa-quote-left"></i>
              <blockquote className="blockquote">
                      <p className="mb-0">{testimonial[1].review}</p>
                      <footer className="font-italic">~~{testimonial[1].reviewer}</footer>
              </blockquote>
            </section>
            
        </StyledCarouselItem>))}
    </Carousel>

  
  <style jsx>{`
    #testimonialContainer{
      width:100%;
      height:70vh;
      color: #fff;
    }
    section{
      
      height:100%;
      background-image:url(${process.env.PUBLIC_URL}foodism360-0eJVAZJ7jJU-unsplash_edit.jpg);
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat! important;
    }
    
    .blockquote{
      width:70%;
      height:75%;
      margin:auto;
      position: relative;
      top: 5vh;
      display: flex;
      flex-direction: column;
    }
    h2{
      color: #fff;
      text-align: center; 
      margin:auto;
      padding: 3vw;
    }
    p{
      color: #fff;
      align-self: center;
      font-size:1.25vw;
    }
    footer{
      color: #fff;
      align-self:flex-end;
      margin: 3vh auto;
    }

    @media (max-width: 1024px){
      #testimonialContainer{
        width:100%;
        height:100vh;
        color: #fff;
      }
      p{
        color: #fff;
        align-self: center;
        font-size:3vw;
      }
      .blockquote{
        width: 90%;
        height:75%;
        margin:auto;
        position: relative;
        top: 0;
        display: flex;
        flex-direction: column;
      }
    }
    
  `}</style>
  </div>
)};

const StyledCarouselItem = styled(Carousel.Item)`

    height:70vh;
    @media (max-width: 1024px){
      height:100vh;

    }
    
  
`

export default Testimonial;