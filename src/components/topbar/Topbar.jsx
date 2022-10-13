import "./Topbar.scss";
import {Link} from 'react-router-dom'

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="left">
      <img src={require("./logo.png")} alt="logo" />
      </div>
      <div className="right">
      <Link to='/hello'>
      <button id="btn">Say HI!</button>
        </Link>
        
      </div>
    </div>
  );
}
