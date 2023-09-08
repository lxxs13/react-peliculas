import { useState } from "react";
import "./App.css";
import MostrarTexto from "./MostrarTexto";
// import ProyectarContenido from "./ProyectarContenido";
import ProyectarContenido2 from "./ProyectarContenido2";
import EjemploReloj from "./EjemploReloj";
import ContenidoDinamico from "./ContenidoDinamico";
import FormularioTexto from "./FormularioTexto";
import EjemploUseEffect from "./EjemploUseEffect";
import ValorContext from "./ValorContext";
import Abuelo from "./Abuelo";

function App() {
  const [texto, setTexto] = useState("");
  const [checked, setChecked] = useState(false);

  // const imagenURL =
  //   "https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png";

  // const manejarClick = () => console.log("click");
  const manejarKeyUp = (e: string) => {
    console.log(e);
    setTexto(e);
  };

  const parteIntermedia = <EjemploReloj />;
  const estilo = {
    backgroundColor: "red",
    width: "50px",
    height: "50px",
    marginLeft: "1rem",
  };
  const parteInferior = <div style={estilo}></div>;

  const calificaciones = [
    { nombre: "Felipe", calificacion: 75 },
    { nombre: "Luis", calificacion: 95 },
    { nombre: "Claudia", calificacion: 85 },
  ];

  return (
    <>
      <h1>Hola Mundo!</h1>

      <ValorContext.Provider value={texto}>
        <Abuelo />
      </ValorContext.Provider>

      {calificaciones.map((cal) => (
        <ContenidoDinamico key={cal.nombre} {...cal} />
      ))}

      <div>
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => setChecked(e.currentTarget.checked)}
        />{" "}
        Mostrar componente useEffect
      </div>

      {checked ? <EjemploUseEffect /> : null}
      <br />
      <ProyectarContenido2
        // parteSuperior={<h3>Esta es la parte de arriba</h3>}
        parteIntermedia={parteIntermedia}
        parteInferior={parteInferior}
      />
      <button
        onMouseEnter={() => console.log("entrando")}
        onClick={() => console.log("Click desde el botón")}
      >
        Click
      </button>
      <br />
      <FormularioTexto manejarKeyUp={(e: string) => manejarKeyUp(e)} />
      <br />
      <MostrarTexto texto={texto} />
    </>
  );
}

export default App;
