import { ReactElement } from "react";

function ProyectarContenido2(props: ProyectarContenido2Props) {
  return (
    <>
      parte superior: {props.parteSuperior ? props.parteSuperior : <h3>Contenido por defecto</h3>}
      <hr />
      {props.parteIntermedia}
      <hr />
      {props.parteInferior}
    </>
  );
}

interface ProyectarContenido2Props {
  parteSuperior?: ReactElement;
  parteIntermedia: ReactElement;
  parteInferior: ReactElement;
}

export default ProyectarContenido2;
