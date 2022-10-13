import './Social.scss';
export default function Social() {

  return (
    <div className="container-fluid social px-0 py-0">
      <div className="row social-up">
        <div className="col">
        <h1 className='px-2 py-2'>Start a project</h1>
        </div>
        <div className="col">
        <h6 className='px-2'>Interested in working together? We should<br></br> have a chat. I'll buy the coffee.</h6>
        </div>
        <div className="col">
        <a className='px-2 py-2' href="tel:9882527667"><button id='social-btn'>Call me</button></a>
        </div>
      </div>
      <div className="row social-down py-3">
      <img src={require("./logo.png")} alt="logo" />
        <h3>Living, learning, & leveling up<br></br>one day at a time.</h3>
        <div className="media">
                      <a href="https://instagram.com/_sunny._.04" target="_blank" rel="noreferrer"><img id='icn' src={require("./instagram.png")} alt="instagram" /></a>
                  <a href="https://www.linkedin.com/in/sunandan2387" target="_blank" rel="noreferrer"><img id='icn' src={require("./linkedin.png")} alt="linkedin" /></a>
        <a href="https://mail.google.com/mail/u/?authuser=sunandanlalka@gmail.com" target="_blank" rel="noreferrer"><img id='icn' src={require("./mail.png")} alt="gmail" /></a>
                 <a href="https://www.github.com/sunandan2387" target="_blank" rel="noreferrer"><img id='icn' src={require("./github.png")} alt="github" /></a>
        <a href="https://wa.me/+919882527667" target="_blank" rel="noreferrer"><img id='icn' src={require("./whatsapp.png")} alt="whatsapp" /></a>
        </div>
        <h6>Made with ❤️ and lots of ☕</h6>
      </div>
    </div>
  )}

