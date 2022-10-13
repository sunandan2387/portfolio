import "./Tools.scss";

export default function Tools() {
  return (
    <div className="tools">
      <div className="quote">
        
          <h2 id="hi">
            Hi! I am Sunandan<br></br>
          </h2>
          <h2 className="px-2">
          "These are some tools and frameworks that I feel confident working on"
        </h2>
        
      </div>
      <div className="up">
        <h2>Tools and Frameworks</h2>
      </div>
      <div className="down">
        <div className="box">
          <div className="column">
            <div id="icon">
              <img id="tool-img fluid" src={require("./des-logo.png")} alt="des-logo" />
            </div>
            <div className="combined">
            <div id="heading">
              <h3>Tools & Frameworks</h3>
            </div>
            <div id="description">
              <p className="px-1">React.js, React Native, Redux, Codeigniter, Bootstrap</p>
              <p className="hide">
                I value simple content structure, clean design patterns, and
                thoughtful interactions.
              </p>
            </div>
            </div>
          </div>
          <div className="column">
            <div id="icon">
              <img id="tool-img fluid" src={require("./front-logo.png")} alt="front-logo" />
            </div>
            <div className="combined">
            <div id="heading">
              <h3>Backend & Database</h3>
            </div>
            <div id="description">
              <p className="px-1">Node.js, Express.js, Mongodb, Firebase, Wamp</p>
              <p className="hide">
              I make sure that every UI have its backbone with full
                functionality and needs.
              </p>
            </div>
            </div>
          </div>
          <div className="column">
            <div id="icon">
              <img id="tool-img fluid" src={require("./back-logo.png")} alt="back-logo" />
            </div>
            <div className="combined">
            <div id="heading">
              <h3>Soft Skills</h3>
            </div>
            <div id="description">
              <p className="px-1 py-0">Time Management, Fast Learner, Teamwork, Leadership Qualities</p>
              <p className="hide py-0">
                I always prefer quality over quantity, There's a reason good fabrics have a cost. 
              </p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
