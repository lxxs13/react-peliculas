import AppCSS from "./App.module.css";

function EjemploCSS() {
  const cuadradoAzul = {
    backgroundColor: "blue",
    width: "50px",
    height: "50px",
    margin: "1rem",
  };
  const subtitulo = "Este es un subtitulo";
  const duplicar = (valor: number) => valor * 2;

  return (
    <>
      <div className="cuadradoRojo"></div>
      <div
        style={{
          backgroundColor: "green",
          width: "50px",
          height: "50px",
          margin: "1rem",
        }}
      ></div>
      <div style={cuadradoAzul}></div>
      <h3 style={{ color: "blue" }}>{subtitulo.toUpperCase()}</h3>
      <h4 className="color">Index.css: El doble de 3 es: {duplicar(3)}</h4>
      <h4 className={AppCSS.color}>
        App.Module.css.css: El doble de 3 es: {duplicar(3)}
      </h4>
    </>
  );
}

export default EjemploCSS;
