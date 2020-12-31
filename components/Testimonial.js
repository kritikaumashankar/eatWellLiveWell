const Testimonial =() => (
  <div id="testimonialContainer">
  <style jsx>{`
    #testimonialContainer{
      width:100%;
      background-image:url(${process.env.PUBLIC_URL}${props.imgProp[1].image_url});
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat! important;
      background-attachment: fixed;
    }
  `}</style>
  </div>
);

export default Testimonial;