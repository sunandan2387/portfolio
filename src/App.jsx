import "./App.scss";
import Topbar from "./components/topbar/Topbar.jsx";
import Intro from "./components/intro/Intro.jsx";
import Tools from "./components/tools/Tools.jsx";
import Testimonials from "./components/testimonials/Testimonials.jsx";
import Works from "./components/works/Works.jsx";
import Social from "./components/social/Social.jsx";


function App() {
  return (
    
    <div className="app">
      <Topbar />
         <div className="sections">
           <Intro />
           <Tools />
           <Works />
           <Testimonials />
           <Social />
         </div>
      
    </div>
     
  );
}

export default App;
