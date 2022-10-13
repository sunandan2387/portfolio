import "./Intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Developer", "Developer"],
    });
  }, []);

  return (
    <div className="intro">
      <div id="particle-container">
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
      </div>

      <div className="head px-4">
        <h1>Web</h1>&nbsp;
        <h3>
          <span ref={textRef}></span>
        </h3>
      </div>
      <div className="profile px-5">
        <div className="stag px-5 mx-5">
        <h5>
          "Building state-of-the-art, easy to use, user-friendly websites and applications is truly a passion of mine. In addition to my knowledge base, I actively seek out new technologies and stay up-to-date on industry trends and advancements.
          I am always looking for opportunities to learn more and develop my skills.
          I always aim for higher status and position while working in an organization and continuously work hard to achieve it."
          </h5>
          </div>
      </div>
      <div className="photo">
        <img src={require("./red.PNG")} alt="profile" />
      </div>
    </div>
  );
}
