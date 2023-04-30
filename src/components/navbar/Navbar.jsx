import React from "react";
import logo from "../../assets/gericht.png";
import "./navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";

const Navbar = () => {
  const [show, setShow] = React.useState(false);

  return (
    <nav className="app-navbar-links">
      <div className="app-navbar-img">
        <img src={logo} alt="" />
      </div>
      <div className="app-navbar-section">
        <ul>
          <li>
            <a href="" className="sans">
              Home
            </a>
          </li>
          <li>
            <a href="" className="sans">
              About
            </a>
          </li>
          <li>
            <a href="" className="sans">
              Menu
            </a>
          </li>
          <li>
            <a href="" className="sans">
              Awards
            </a>
          </li>
          <li>
            <a href="" className="sans">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="app-navbar-login">
        <a href="">Login / Register</a>
        <a href="">Book a Table</a>
      </div>

      <div className="app-navbar-open">
        <GiHamburgerMenu
          color="white"
          fontSize={25}
          onClick={() => setShow(true)}
          style={{ cursor: "pointer" }}
        />
      </div>
      {show && (
        //  {/* Mobile screen size */}
        <div className="app-navbar-mobile">
          <div>
            <MdOutlineRestaurantMenu
              
              fontSize={25}
              onClick={() => setShow(false)}
              style={{ cursor: "pointer" }}
              className="close-menu"
            />
           
            <ul>
              <li>
                <a href="" className="sans-mobile">
                  Home
                </a>
              </li>
              <li>
                <a href="" className="sans-mobile">
                  About
                </a>
              </li>
              <li>
                <a href="" className="sans-mobile">
                  Menu
                </a>
              </li>
              <li>
                <a href="" className="sans-mobile">
                  Awards
                </a>
              </li>
              <li>
                <a href="" className="sans-mobile">
                  Contact
                </a>
              </li>
            </ul>
            </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
