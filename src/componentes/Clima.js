import React, { Component } from "react";

class Clima extends Component {
  render() {
    console.log(this.props.resultado);
    return (
      <div className="container">
        <h1>Desde clima</h1>
      </div>
    );
  }
}

export default Clima;
