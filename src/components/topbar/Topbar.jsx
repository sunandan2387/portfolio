import "./Topbar.scss";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="left">
      <img src={require("./logo.png")} alt="logo" />
      </div>
      <div className="right">
      <button id="btn"><a href="mailto:sunandanlalka@gmail.com">Say HI!</a></button>
      </div>
    </div>
  );
}
