import "./NavBar.css"
function Navbar() {
  return (
    <div className="nav">
    <h1> RAMWAY</h1>
   
   <ul>
      <li>
        <a href="">Remeras Hombres</a>
      </li>
      <li>
        <a href="">Remeras Mujer</a>
      </li>
      <li>
        <a href="">Pantalones Hombre</a>
      </li>
      <li>
        <a href="">Remeras Mujer</a>
      </li>
    </ul>
    <span> <img width="50px" height="50px" src="https://cdn-icons-png.flaticon.com/512/107/107831.png" alt="Carrito" /></span>
    </div>
  );
}

export default Navbar;
