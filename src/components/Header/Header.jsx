import React from "react";
import './header.css'
import Spoon from "../../Reuseablecompo/Spoon";
import Welcome from "../../assets/welcome.png";

const Header = () => {
  return (
    <div className="app-header">
      <div>
        <p className="app-head-p">Chase The New Flavour</p>
        <Spoon />
        <h1 className="app-head-h1">The Key To Fine Dining</h1>
        <p className="app-head-sit">
          Sit tellus lorbtis senectus vivamus molestie, Condimentum Volutpat
          Morbal Facllisis Quam Sapien Et penatibus Alliquam Amet Tellus
        </p>
        <button className="explore">Explore Now</button>
      </div>
      <div className="app-head-img"> 
        <img src={Welcome} alt="" />
      </div>
    </div>
  );
};

export default Header;
