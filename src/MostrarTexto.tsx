function MostrarTexto(props: MostrarTextoProps) {
  return <div>{props.texto}</div>;
}

export default MostrarTexto;

interface MostrarTextoProps {
    texto: string;
}

MostrarTexto.defaultProps = {
    texto: 'valor por default default props',
}