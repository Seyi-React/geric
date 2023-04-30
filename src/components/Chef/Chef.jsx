import React from "react";
import "./chef.css";
import Chefimg from "../../assets/chef.png";
import Spoon from "../../Reuseablecompo/Spoon";
import Quote from "../../assets/quote.png";
import Sign from '../../assets/sign.png'

const Chef = () => {
  return (
    <div className="app-chef">
      <div className="app-chef-main-img">
        <img src={Chefimg} alt="" />
      </div>
      <div>
        <div className="app-chef-section">
          <h6>Chef's Word</h6>
          <Spoon />
          <h2>What we believe in</h2>
          <img src={Quote} alt="" className="sign"/>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem
            nesciunt consectetur cumque obcaecati quidem? Perspiciatis
            asperiores quam quod aperiam quae, accusantium quas mollitia minus
            eum veritatis a repellat voluptate quisquam!
          </p>
          <div className="app-chef-bio">
            <p>Kevin Luo</p>
             <h5>Chef & Founder </h5>
          </div>
          <div>
            <img src={Sign} alt="" className="chef-name" />
        </div>
        </div>
       
      </div>
    </div>
  );
};

export default Chef;
