import React, { Component } from "react";
import ButtonFill from "../../Global/ButtonFill/ButtonFill";
import ButtonStroke from "../../Global/ButtonStroke/ButtonStroke";
import Navbar from "../../Global/Navbar/Navbar";
import "./Header.scss";
import svg from "./img/designer_1.png";
class Header extends Component {
  render() {
    return (
      // Start My Main Header
      <header className="main-header">
        <div className="svg">
          <img src={svg} alt="" />
        </div>
        <div className="container">
          <Navbar />
          <div className="row">
            <div className="col-12 col-sm-12 col-md-9 col-lg-6">
              <div className="content">
                <h2>
                  Introduce Your Product <br />
                  Quickly & Effectively
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                  eu, pretium quis, sem. Nulla consequat massa quis enim.
                </p>
                <div className="buttons">
                  <ButtonFill val="Purchase UI Kit" />
                  <ButtonStroke val="Learn More" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
export default Header;
