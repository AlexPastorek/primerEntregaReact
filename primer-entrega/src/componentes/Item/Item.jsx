import React from 'react'
import { ButtonChild } from '../MyButton/MyButton';
import "./item.css"

export default function Item(props) {
    const {titulo, precio, detalle, img} = props;
  return (
    <div className="producto">
        <div >
            <img src={img} width ="184 px" height="234 px" alt="imagen" />
         </div>
         <h3>{titulo}</h3>
         <h4>{precio}</h4>
         <p>{detalle}</p>
         <ButtonChild>Ver Mas</ButtonChild>
    </div>
  )
}
