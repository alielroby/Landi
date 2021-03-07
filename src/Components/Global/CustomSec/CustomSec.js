import React, { Component } from "react";
import "./CustomSec.scss";
class CustomSec extends Component {
  render() {
    return (
      <section className="CustomSec">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6">
              {this.props.img}
              <img src={this.props.img} alt="" />
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6">
              <div className="content">
                <h2>{this.props.headline}</h2>
                <p>{this.props.des}</p>
                {this.props.CustomC}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default CustomSec;
