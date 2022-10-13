import "./Testimonials.scss";
import Carousel from 'react-bootstrap/Carousel'
// import carochandu from './caro-chandu.jpg'
// import caromusu from './caro-musu.jpg'
// import carobhaji from './caro-bhaji.jpg'





export default function Testimonials() {
  return (
    <div className="testimonials">
      <div className="testup">
        <h1>Testimonials</h1>
        <h2>People I've worked with have said some nice things...</h2>
      </div>
    



 <Carousel id="caro">
  <Carousel.Item>
  <div className="item">
    <img src={require("./chandu.webp")} alt="chandu" />
      </div>
    <Carousel.Caption>
      
      <h3 style={{color: "black", fontSize: "1.1em",fontFamily:"sans-serif",letterSpacing:"2px"}}>"He is a good Website Developer. Also have a good sense of designing. During out full stack project with him he delivered beautiful website in timeline. He even suggested some changes himself which was left by our-side."</h3>
      <h3 style={{color: "black", fontSize: "1.2em", fontWeight: "bold"}}>Chandan</h3>
      <h3 style={{color: "black", fontSize: "1em"}}>Developer, Techneith</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <div className="item">
    <img src={require("./musu.jpg")} alt="musu" />
      </div>

    <Carousel.Caption>
      <h3 style={{color: "black", fontSize: "1.1em",fontFamily:"sans-serif",letterSpacing:"2px"}}>“Sunandan was a real pleasure to work with and I look forward to working with him again. He’s definitely the kind of developer you can trust with a project from start to finish.”</h3>
      <h3 style={{color: "black", fontSize: "1.2em",fontWeight: "bold"}}>Muskan Mahajan</h3>
      <h3 style={{color: "black", fontSize: "1em"}}>Intern, K21 Academy</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <div className="item">
    <img src={require("./bhaji.jpg")} alt="bhaji" />
      </div>

    <Carousel.Caption>
      <h3 style={{color: "black", fontSize: "1.1em",fontFamily:"sans-serif",letterSpacing:"2px"}}>"Working with sunandan was a great experience he knows what exactly the client wants one explanation is enough for him and I myself learned alot while working with him."</h3>
      <h3 style={{color: "black", fontSize: "1.2em",fontWeight: "bold"}}>Harbhajan Singh</h3>
      <h3 style={{color: "black", fontSize: "1em"}}>Developer, Cvent</h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
      
    </div>
  );
}


