import React from "react";
import Header from "./Header";
import Formulario from "./Formulario";
import Error from "./Error";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      error: "",
      consulta: {},
      resultado: {}
    };
  }
  componentDidUpdate() {
    this.consultarApi();
  }
  consultarApi = () => {
    const { ciudad, pais } = this.state.consulta;
    if (!ciudad || !pais) return null;
    const apiId = "f9ec6f57483c8dae6d54c201679a9d7b";
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${apiId}`;
    console.log(url);
    //Query con fecht api
    fetch(url)
      .then(respuesta => {
        return respuesta.json();
      })
      .then(datos => {
        this.setState({
          resultado: datos
        });
      })
      .catch(error => {
        console.log(error);
      });
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
