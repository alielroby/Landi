import React, { Component } from "react";
import "./Sec2.scss";
import img from "./img/undraw_mobile_login_ikmv.png";
import icon from "./img/icon.png";
class Sec2 extends Component {
  render() {
    return (
      <section className="Sec2">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
              <div className="content">
                <h2>Light, Fast & Powerful</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                  eu, pretium quis, sem. Nulla consequat massa quis enim.
                </p>
              </div>
              <div className="row">
                <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                  <div className="item">
                    <img src={icon} alt="" />
                    <h5>Title Goes Here</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor.{" "}
                    </p>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                  <div className="item">
                    <img src={icon} alt="" />
                    <h5>Title Goes Here</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6">
              <div className="img">
                <img src={img} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Sec2;
