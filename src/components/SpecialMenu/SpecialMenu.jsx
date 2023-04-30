import React from "react";
import "./specialmenu.css";
import Spoon from "../../Reuseablecompo/Spoon";
import Menu from "../../assets/menu.png";

const SpecialMenu = () => {
  return (
    <div className="app-main-specialmenu">
      <div className="app-specialmenu">
        <h3>Menu That fits Your Palatte</h3>
        <Spoon />
        <h2>Today's Special </h2>
      </div>
      <div className="app-specialmenu-content">
        <div className="app-specialmenu-wine">
          <h4>Wine & Beer</h4>
          <section>
            <h5>Chapel Hill</h5>
            <p>$16</p>
          </section>
          <section>
            <h5>Carter Malber</h5>
            <p>$19</p>
          </section>
          <section>
            <h5>La vicille</h5>
            <p>$44</p>
          </section>
          <section>
            <h5>Rhino pale</h5>
            <p>$26</p>
          </section>
        </div>
        <div className="app-specialmenu-img">
          <img src={Menu} alt="" />
        </div>
        <div className="app-specialmenu-cocktails">
          <h4>Cocktails</h4>
          <section>
            <h5>Aperol Speriz</h5>
            <p>$20</p>
          </section>
          <section>
            <h5>Dark 'N' Stormy</h5>
            <p>$16</p>
          </section>
          <section>
            <h5>Da quiri</h5>
            <p>$10</p>
          </section>
          <section>
            <h5>Negromi</h5>
            <p>$26</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default SpecialMenu;
