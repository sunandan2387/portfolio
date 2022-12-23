import "./Works.scss";

export default function Works() {
  return (
    <div className="works">
      <div className="row up">
        <div className="col mt-5">
        <h1>My Recent Projects</h1>
        </div>
        <div className="col">
        <h2 className="px-2">
          here are few projects made by me. Want to see more{" "}
          <a href="https://www.github.com/sunandan2387" target="_blank" rel="noreferrer">Click here.</a>
        </h2>
        </div>
      </div>
      <div className="down">
        <div className="container-fluid">
          <div className="row">
            
            <div className="col">
            <div className="card">
            <img src={require("./capture.png")} alt="filmi_beat" />
            <div className="wrapper">
              <button id="btn"><a className="stylelink" href="https://filmibeat.techasoft.com/">Visit Website</a></button>
            </div>
          </div>
            </div>

        

        
            <div className="col">
            <div className="card">
            <img src={require("./skill.png")} alt="skill_mapper" />
            <div className="wrapper">
  
              <button id="btn"><a className="stylelink" href="https://github.com/sunandan2387/skill-mapper">Visit Website</a></button>
            </div>
          </div>
            </div>

            <div className="col">
            <div className="card">
            <img src={require("./rent.png")} alt="buy_rent_properties" />
            <div className="wrapper">
              <button id="btn"><a className="stylelink" href="https://bestdeals-sunandan.netlify.app/">Visit Website</a></button>
            </div>
          </div>
            </div>

         
        
          </div>
        </div>
      </div>
    </div>
  );
}
