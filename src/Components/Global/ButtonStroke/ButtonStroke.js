import React, { Component } from "react";
import "./ButtonStroke.scss";
class ButtonStroke extends Component {
  render() {
    return (
      <div className="ButtonStroke">
        <button>{this.props.val}</button>
      </div>
    );
  }
}
export default ButtonStroke;
