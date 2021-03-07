import React, { Component } from "react";
import ButtonFill from "../ButtonFill/ButtonFill";
import "./Navbar.scss";
class Navbar extends Component {
  render() {
    return (
      <div className="main-navbar">
        <div className="row">
          <div className="col-4">
            <nav>
              <ul>
                <li>
                  <a href="!#">Home</a>
                </li>
                <li>
                  <a href="!#">About</a>
                </li>
                <li>
                  <a href="!#">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-4">
            <div className="logo">
              <h2>Landi</h2>
            </div>
          </div>
          <div className="col-4">
            <div className="buy">
              <ButtonFill val="buy now" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Navbar;
