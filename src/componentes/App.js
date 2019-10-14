import React from "react";
import Header from "./Header";
import Formulario from "./Formulario";
function App() {
  return (
    <div className="app">
      <Header titulo={"Clima React"}></Header>
      <Formulario></Formulario>
    </div>
  );
}

export default App;
