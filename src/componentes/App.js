import React from "react";
import Header from "./Header";
import Formulario from "./Formulario";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      error: ""
    };
  }
  componentDidMount() {
    this.setState({
      error: false
    });
  }
  datosEnviado = respuesta => {
    if (respuesta.ciuda === "" || respuesta.pais === "") {
      this.setState({
        error: true
      });
    } else {
      console.log("Correcto");
    }
  };
  render() {
    return (
      <div className="app">
        <Header titulo={"Clima React"}></Header>
        <Formulario datosFormulario={this.datosEnviado}></Formulario>
      </div>
    );
  }
}
export default App;
