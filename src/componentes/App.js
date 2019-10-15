import React from "react";
import Header from "./Header";
import Formulario from "./Formulario";
import Error from "./Error";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      error: "",
      consulta: {}
    };
  }
  componentDidUpdate() {
    this.consultarApi();
  }
  consultarApi = () => {
    const { ciudad, pais } = this.state.consulta;
    if (!ciudad || !pais) return null;
    const apiId = "f9ec6f57483c8dae6d54c201679a9d7b";
    let url = `http://samples.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}uk&appid=${apiId}`;
    console.log(url);
  };
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
      this.setState({
        consulta: respuesta
      });
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
