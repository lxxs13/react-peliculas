import { useContext } from "react";
import valorContext from "./ValorContext";

function Hijo() {
  const valor = useContext(valorContext);

  return (
    <>
      <h3>Componente hijo: el valor del context es: {valor}</h3>
    </>
  );
}

export default Hijo;
