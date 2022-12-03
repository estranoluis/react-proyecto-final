import React, {useState, useContext} from 'react';
import {CartContext} from '../../context/CartContext';

const ItemDetail = ({item}) => {
   const [cantidad, setCantidad] = useState(1);
   const {addItem} = useContext(CartContext)

   const modificarCant = (signo) => {
      if(signo === "+") {
         if(cantidad < 10) {
            setCantidad(cantidad + 1)
         }
      } else {
         if(cantidad > 1) {
            setCantidad(cantidad - 1)
         }
      }
   }

   return (
      <>
         <div className="row my-4 game-details">
            <div className="col-md-4">
               <img className='img-fluid' src={item[1].img} alt={item[1].titulo} />
            </div>
            <div className="col-md-8 game-details__body">
               <div className="card-body">
                  <h4 className="card-title">{item[1].titulo}</h4>
                  <p className="card-text">{item[1].categoria}</p>
                  <p className="card-text">Disponible para: {item[1].sistemas}</p>
                  <p className="card-text">${item[1].precio}</p>
                  <div className="card-quantity">
                     <p className="card-text">Cantidad a comprar</p>
                     <div className="card-quantity__selector">
                        <span onClick={() => modificarCant("-")}>-</span>
                        <span className="quantity">{cantidad}</span>
                        <span onClick={() => modificarCant("+")}>+</span>
                     </div>
                  </div>
                  <button onClick={() => addItem(item, cantidad)} className="btn btn-success add-cart-btn">Agregar al carrito</button>
               </div>
            </div>
         </div>
      </>
   );
}

export default ItemDetail;
