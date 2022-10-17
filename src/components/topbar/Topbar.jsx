import "./Topbar.scss";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="left">
      <img src={require("./logo.png")} alt="logo" />
      </div>
      <div className="right">
      <button id="btn"><a href="https://drive.google.com/file/d/1sIVUhggydXMHzFVUN2Cs6rvDDF9-Auud/view?usp=sharing" download="resume">Resume</a></button>
      </div>
    </div>
  );
}
