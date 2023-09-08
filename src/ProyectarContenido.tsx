import { ReactElement } from "react";

function ProyectarContenido(props: ProyectarContenidoProps) {
  return (
    <>
      <h3>Parte Superior</h3>
      {props.children}
      <h3>Parte Inferior</h3>
    </>
  );
}

interface ProyectarContenidoProps {
  children: ReactElement;
}

export default ProyectarContenido;
