import Link from 'next/link';
import Carousel from 'react-bootstrap/Carousel';
const Testimonial =({testimonials}) => {
  
  return(
  <div id="testimonialContainer">
  <section>
    <h2>What Clients Say...</h2>
    <Carousel style={{height: '55%'}}>
    {Object.entries(testimonials).map((testimonial) => {
      return( 
       testimonial[1].reviewer !=="Anonymous" ?<Carousel.Item key={parseInt(testimonial[0])} style={{height: '50vh'}}>
          <blockquote className="blockquote">
            <p className="mb-0">{`${testimonial[1].review.substring(0,400)}`}<Link href={`/testimonials#${testimonial[0]}`} ><strong style={{cursor:'pointer'}}>...Read More</strong></Link></p>
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
      width:60%;
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
      padding: 0;
      align-self: center;
    }
    p{
      color: #fff;
      align-self: center;
      font-size:large;
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
    @media (max-width: 960px){
      #testimonialContainer{
        width:100%;
        height:100vh;
        color: #fff;
      }
      p{
        color: #fff;
        align-self: center;
        font-size:large;
      }
      .blockquote{
        width: 80%;
        height:65%;
        margin:auto;
        padding:2em;
        display: flex;
        flex-direction: column;
      }
      section{
        height:100vh;
        background-image:url(./foodism360-0eJVAZJ7jJU-unsplash_edit.jpg);
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat! important;
      }
      footer{
        color: #fff;
        align-self:flex-end;
        margin: 0 auto;
      }
    }
    
    @media (max-width: 900px){
      #testimonialContainer{
        width:100%;
        height:100vh;
        color: #fff;
      }
      p{
        color: #fff;
        align-self: center;
        font-size:medium;
      }
      .blockquote{
        width: 85%;
        height:75%;
        margin:auto;
        padding:0.5em;
        position: relative;
        top: 5vh;
        display: flex;
        flex-direction: column;
      }
      section{
        height:100vh;
        background-image:url(./foodism360-0eJVAZJ7jJU-unsplash_edit.jpg);
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