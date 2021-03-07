import React, { Component } from "react";
import "./ButtonFill.scss";
class ButtonFill extends Component {
  render() {
    return (
      <div className="buttonFill">
        <button>{this.props.val}</button>
      </div>
    );
  }
}
export default ButtonFill;
