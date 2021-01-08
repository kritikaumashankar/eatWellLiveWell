import Link from 'next/link';
import Carousel from 'react-bootstrap/Carousel';
import testimonials from '../testimonials.json';
const Testimonial =() => {
  
  return(
  <div id="testimonialContainer">
  <section>
    <h2>What Clients Say...</h2>
    <Carousel style={{height: '60%'}}>
    {Object.entries(testimonials).map((testimonial) => {
      return( 
       testimonial[1].reviewer !=="Anonymous" ?<Carousel.Item key={parseInt(testimonial[0])} style={{height: '50vh'}}>
          <blockquote className="blockquote">
            <p className="mb-0">{`${testimonial[1].review.substring(0,500)}`}<Link href={`/testimonials#${testimonial[0]}`} ><strong style={{cursor:'pointer'}}>...Read More</strong></Link></p>
            <footer className="font-italic">~~{testimonial[1].reviewer}</footer>
          </blockquote>
            
        </Carousel.Item> : "")})}
    </Carousel>
    <Link href="/testimonials"><button type="button" className="btn btn-secondary">Read More Testimonials</button></Link>
    
    </section>
  <style jsx>{`
    #testimonialContainer{
      width:100%;
      height:75vh;
      color: #fff;
    }
    section{
      height:75vh;
      background-image:url(./foodism360-0eJVAZJ7jJU-unsplash_edit.jpg);
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat! important;
      display: flex;
      flex-direction: column;
    }
    
    .blockquote{
      width:50%;
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
      align-self: center;
    }
    p{
      color: #fff;
      align-self: center;
      font-size:1.15vw;
    }
    footer{
      color: #fff;
      align-self:flex-end;
      margin: 3vh auto;
    }

    .btn{
      margin:auto;
      align-self: center;
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
        height:80%;
        margin:auto;
        position: relative;
        top: 2vh;
        display: flex;
        flex-direction: column;
      }
      section{
        height:100vh;
        background-image:url(${process.env.PUBLIC_URL}foodism360-0eJVAZJ7jJU-unsplash_edit.jpg);
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat! important;
      }
    }
    
  `}</style>
  </div>
)};

// const StyledCarouselItem = styled(Carousel.Item)`

//     height:70vh;
//     @media (max-width: 1024px){
//       height:100vh;

//     }
    
  
// `

export default Testimonial;