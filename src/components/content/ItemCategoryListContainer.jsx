import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import ItemList from './ItemList';
import { getJuegos } from '../../utils/firebase';

const ItemCategoryListContainer = () => {
   const [juegos, setJuegos] = useState([]);
   const {category} = useParams()
   useEffect(() => {
      getJuegos().then(juegos => {
         const juegosCategoria = juegos.filter(juego => juego[1].categoria.toLowerCase() === category)
         const cardJuego = juegosCategoria.map(juego =>
            <div className="card game-card" key={juego[0]}>
               <img className='card-img-top' src={juego[1].img} alt={juego[1].titulo} />
               <div className="card-body">
                  <h5 className="card-title">{juego[1].titulo}</h5>
                  <p className="card-text">Categoria: {juego[1].categoria}</p>
                  <p className="card-text">${juego[1].precio}</p>
                  <button className="btn btn-dark"><Link className="nav-link" to={`/item/${juego[0]}`}>Ver Detalles</Link></button>
               </div>
            </div>)
            setJuegos(cardJuego)
      })
   }, [category])

   return (
      <>
         <section className="container my-4">
            <ItemList lista={juegos} />
         </section>
      </>
   );
}

export default ItemCategoryListContainer;
