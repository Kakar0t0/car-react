import React, { Component } from "react";
import Cars from "./Cars";

class Mycars extends Component {

  

  noCopy = () => {
    alert("Merci de ne pas copier le text");
  };

  addStyle = (e) => {
    console.log(e.target);
    e.target.classList.toggle("styled");
  };

  render() {
    console.log(this);
    return (
      <div>
        <h1 onMouseOver={this.addStyle}>{this.props.title}</h1>

        <p onCopy={this.noCopy}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
          corrupti in eum consectetur deserunt architector.
        </p>

        <Cars color="grey">Ford</Cars>
        <Cars color="black">BMW</Cars>
        <Cars color="white"></Cars>
      </div>
    );
  }
}

export default Mycars;