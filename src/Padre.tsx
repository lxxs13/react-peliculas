import { useContext } from "react";
import valorContext from "./ValorContext";
import Hijo from "./Hijo";

function Padre() {
  const valor = useContext(valorContext);

  return (
    <>
      <h3>Componente padre: el valor del context es: {valor}</h3>
      <Hijo/>
    </>
  );
}

export default Padre;
