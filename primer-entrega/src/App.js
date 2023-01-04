import "./App.css";
import MyButton from "./componentes/MyButton/MyButton";
import { ButtonChild } from "./componentes/MyButton/MyButton";
import Ejemplos from "./componentes/Ejemplos";
import Item from "./componentes/Item/Item";
import FlexWrapper from "./componentes/FlexWrapper/FlexWrapper";
import Navbar from "./componentes/NavBar/NavBar";

//componente app
function App() {
  return (
    <>
      
      <Navbar/>
      
      <hr></hr>
      <div className="body">
        <h2>Bienvenidos a la tienda Electronica de RAMWAY</h2>
             <FlexWrapper>
        <Item 
        titulo = "Remera Deportiva" 
        precio = {"$"+ 400} detalle = "Remera lycra con detalles deportivos" 
        img= "https://dxtmania.com/tienda/4249-large_default/remera-deportiva-mangas-cortas-dxt-hombre.jpg" />
        <Item 
        titulo = "Remera Deportiva Mujer" 
        precio = {"$"+ 550} detalle = "Remera algodon con detalles deportivos" 
        img= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsF1Wzb8Hv8IjnmWal2ydfRgZImhKrUJ3kWA&usqp=CAU" 
        />
        <Item 
        titulo = "Pantalon Hombre" 
        precio = {"$"+ 1400} detalle = "Jean azul reforzado" 
        img= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEz4iC2bn0bMx4docVakmrsUZfoQMZuyMC8w&usqp=CAU" />
        <Item 
        titulo = "Pantalon Mujer" 
        precio = {"$"+ 1200} detalle = "Jean azul reforzado" 
        img= "https://www.toche.com.ar/wp-content/uploads/2021/08/4040019_MUJER_AZUL_1.jpg" 
        />
      </FlexWrapper>
      </div>

    </>
  );
}

export default App;
