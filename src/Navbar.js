import React from "react";
import logo from "./Images/logo.png";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="Navbar">
      <div className="NavDown">
        <nav className="navbar bg-body-tertiary fixed-top">
          <div className="NavUp border-bottom col-xl-12">
            <div className="Nav1">
              <p>World's Largest Medical Equipment Market Place</p>
            </div>
            <div className="Nav2">
              <Link to="/Myaccount" className="Nav2-left nav-link">My account |{" "}</Link>
              <Link to="/Contact us" className="Nav2-left nav-link"> Contact us{" "}</Link>
            </div>
          </div>
          <div className="container">
            <div className="Nav-logo">
              <Link to="/"><img src={logo} alt="" /></Link>
            </div>
            <div className="menu1">
              <ul className="nav-menu">
                <Link to="/Aboutus" className="nav-link"><p className="link">About us</p></Link>
                <Link to="/OurStory" className="nav-link"><p className="link">Our Story</p></Link>
                <Link to="/Sellon1MDM" className="nav-link"><p className="link">Sell on 1MDM</p></Link>
                <Link to="/Pricing" className="nav-link"><p className="link">Pricing</p></Link>
              </ul>
            </div>
            <div className="menu2">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-controls="collapseExample" area-expanded="false">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse justify-content-end collapse show" id="collapseExample">
                <div>
                  <ul className="nav-menu2">
                    <Link to="/Aboutus" className="nav-link"><p className="link">About us</p></Link>
                    <Link to="/OurStory" className="nav-link"><p className="link">Our Story</p></Link>
                    <Link to="/Sellon1MDM" className="nav-link"><p className="link">Sell on 1MDM</p></Link>
                    <Link to="/Pricing" className="nav-link"><p className="link">Pricing</p></Link>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
