import './Hello.scss'
import {Link} from 'react-router-dom'

export default function Hello() {
  return (
    <div className='hello'>

      <div className="navbar">
        <div className="nav-left">
        <Link to='/'><img src={require("./logo.png")} alt="logo" /></Link>
        </div>
      <div className="nav-right">
      <Link to='/'><img src={require("./cross.png")} alt="cross" /></Link>
       </div>
      </div>
      <div className="hello-content">
      <div className="hello-left">
        <h1 className='px-4'>Thanks for taking the time to reach out. How can I help you today?</h1>
      </div>
      <div className="hello-right">

        <div className="wrap">
        <div className="name">
          <h4>Name</h4>
        <input type="text" />
        </div>
        <div className="email">
          <h4>Email</h4>
        <input type="email" />
        </div>
        </div>
        <div className="detail">
          <h4>Message</h4>
        <textarea rows = "5" cols = "37" name = "description">
         
         </textarea>
        </div> 
        <input id='submit' type="submit" />
      </div>
      </div>
    </div>
  )
}
