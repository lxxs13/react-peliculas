import { useEffect, useState } from "react";

function EjemploUseEffect() {
  const [click, setClick] = useState(0);
  const [fecha, setFecha] = useState(new Date());

  useEffect(() => {
    console.log("Componente ha cargado");
    document.title = `${click}`;

    return () => {
      //se ejecuta al destruir el elemento
      console.log("El componente se va a destruir");
    };
  }, [click]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFecha(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  });

  useEffect(() => {
    console.log("solo una vez");
    
  }, [])

  return (
    <>
      <button type="button" onClick={() => setClick(click + 1)}>
        Me haz clickeado {click} veces
      </button>

      <div>{fecha.toString()}</div>
    </>
  );
}

export default EjemploUseEffect;
