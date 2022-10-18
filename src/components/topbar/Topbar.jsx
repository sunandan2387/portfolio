import "./Topbar.scss";

export default function Topbar() {

  const clicked = () => {
    window.location.href = 'https://drive.google.com/file/d/1sIVUhggydXMHzFVUN2Cs6rvDDF9-Auud/view?usp=sharing';
}

  return (
    <div className="topbar">
      <div className="left">
      <img src={require("./logo.png")} alt="logo" />
      </div>
      <div className="right">
       
      <button onClick={clicked} id="btn">Resume</button>
      
      </div>
    </div>
  );
}
