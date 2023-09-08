function ContenidoDinamico(props: any) {

  //   return (
  //     <>{props.mostrarMensajeSecreto ? <span>Mensaje Secreto: 42</span> : null}</>
  //   );

  if (props.calificacion > 90) {
    return (
      <div>
        <h3>{props.nombre}: Excelente calificacion</h3>
      </div>
    );
  } else if (props.calificacion >= 80 && props.calificacion <= 90) {
    return (
      <div>
        <h3>{props.nombre}: Muy bien hecho</h3>
      </div>
    );
  } else {
    return (
      <div>
        <h3>{props.nombre}: LOL</h3>
      </div>
    );
  }
}

export default ContenidoDinamico;
