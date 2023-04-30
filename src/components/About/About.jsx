import React from "react";
import "./about.css";
import Glogo from "../../assets/g.png";
import Spoon from "../../Reuseablecompo/Spoon";
import Knife from "../../assets/knife.png";

const About = () => {
  return (
    <div className="app-about-us">
      <div className="app-overlay">
        <img src={Glogo} alt="" />
      </div>
      <div className="app-content">
        <div className="app-content-about">
          <h1>About Us</h1>
          <Spoon />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla
            asperiores delectus vero autem nobis ab assumenda maxime qui dolorem
            accusantium, possimus libero voluptate nostrum cupiditate molestiae
            incidunt reiciendis, quos error?
          </p>
          <button>Know More</button>
        </div>
        <div className="app-knife">
          <img src={Knife} alt="" />
        </div>
        <div className="app-content-history">
          <h1>Our History</h1>
          <Spoon />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla
            asperiores delectus vero autem nobis ab assumenda maxime qui dolorem
            accusantium, possimus libero voluptate nostrum cupiditate molestiae
            incidunt reiciendis, quos error?
          </p>
          <button>Know More</button>
        </div>
      </div>
    </div>
  );
};

export default About;
