import React, {useState, useEffect} from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { getJuego } from '../../utils/firebase';

const ItemDetailContainer = () => {
   const [juego, setJuego] = useState([]);
   const {id} = useParams()

   useEffect(() => {
      getJuego(id).then(juego => {
         setJuego(juego)
      })
   }, [id])

   if(juego.length !== 0) {
      return (
         <>
         <div className="container">
            <ItemDetail item={juego}/>
         </div>
         </>
      );
   }
}

export default ItemDetailContainer;
