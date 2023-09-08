function FormularioTexto(props: FormularioTextoProps) {
  return (
    <>
      <input
        type="text"
        onKeyUp={(e) => props.manejarKeyUp(e.currentTarget.value)}
      />
    </>
  );
}

interface FormularioTextoProps {
  manejarKeyUp(texto: string): void;
}

export default FormularioTexto;
