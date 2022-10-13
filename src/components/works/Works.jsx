import "./Works.scss";

export default function Works() {
  return (
    <div className="works">
      <div className="row up">
        <div className="col">
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
        <div className="container">
          <div className="card">
            <img src={require("./home.jpg")} alt="home" />
            <div className="wrapper">
              <h2>Lorem ipsum dolor sit, amet consectetur adipisicing.</h2>
              <button id="btn">Visit Website</button>
            </div>
          </div>

          <div className="card">
            <img src={require("./home.jpg")} alt="home" />
            <div className="wrapper">
              <h2>Lorem ipsum dolor sit, amet consectetur adipisicing.</h2>
              <button id="btn">Visit Website</button>
            </div>
          </div>

          <div className="card">
            <img src={require("./home.jpg")} alt="home" />
            <div className="wrapper">
              <h2>Lorem ipsum dolor sit, amet consectetur adipisicing.</h2>
              <button id="btn">Visit Website</button>
            </div>
          </div>

          <div className="card">
            <img src={require("./api.png")} alt="api-integration" />
            <div className="wrapper">
              <h2>It fetches data from an API and shows it in tabular form with features like search etc.</h2>
              <button id="btn">Visit Website</button>
            </div>
          </div>

          <div className="card">
            <img src={require("./home.jpg")} alt="home" />
            <div className="wrapper">
              <h2>Lorem ipsum dolor sit, amet consectetur adipisicing.</h2>
              <button id="btn">Visit Website</button>
            </div>
          </div>

          <div className="card">
            <img src={require("./askai.png")} alt="askaisolutions" />
            <div className="wrapper">
              <h2>this website is made on wix and is used by Askai solutions</h2>
              <button id="btn">Visit Website</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
