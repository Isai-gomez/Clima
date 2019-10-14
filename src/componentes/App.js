import React from "react";
import Header from "./Header";
import Formulario from "./Formulario";
import Error from "./Error";
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
    const error = this.state.error;
    let resultado;
    if (error) {
      resultado = <Error mensaje={"Ambos campos son obligatorios"}></Error>;
    }
    return (
      <div className="app">
        <Header titulo={"Clima React"}></Header>
        <Formulario datosFormulario={this.datosEnviado}></Formulario>
        {resultado}
      </div>
    );
  }
}
export default App;
