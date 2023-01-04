//  import logo from "./logo.svg";

import MyButton from "./MyButton/MyButton";

function Ejemplos() {
  const greeting = "Bienvenidos a mi E-comerce";
  /* hacemos una funcion  */
  const mostrarCurso = () => "Comision 43580 - react js";
  /* ponemos todo lo que es estilo por separado y luego lo agregamos  */
  let styleHeader = {
    backgroundColor: "black",
    margin: "20px 10px",
    border: "solid 3px red",
  };
  return (
    <section className="App">
      <div style={styleHeader} className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p style={{ color: "pink" }}>{mostrarCurso()};</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {greeting}
        </a>
        <MyButton/>
        {/* para hacer comentarios utilizo shift + alt + a */}
      </div>
      
    </section>
    
  )
  
}
export default Ejemplos;
