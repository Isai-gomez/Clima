import React, { Component } from "react";

class Clima extends Component {
  mostrarResultado = () => {
    const { name, weather, main } = this.props.resultado1;
    if (!name || !weather || !main) return null;
    return <div className="row">{name}</div>;
  };
  render() {
    return <div className="container">{this.mostrarResultado()}</div>;
  }
}

export default Clima;
