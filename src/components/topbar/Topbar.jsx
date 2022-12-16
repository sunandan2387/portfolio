import "./Topbar.scss";

export default function Topbar() {

  const clicked = () => {
    window.location.href = 'https://drive.google.com/file/d/1NcEkQX1_fe29bFDlrOUJXv7RJTxn3KU8/view?usp=share_link';
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
