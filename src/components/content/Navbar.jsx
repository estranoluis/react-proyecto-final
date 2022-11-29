import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown from '../layouts/Dropdown.jsx';
import CartWidget from '../layouts/CartWidget.jsx';

const Navbar = () => {
   const dropLista = ["Accion", "Disparos", "Deporte", "Rol", "Pelea"]

   return (
      <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
         <div className="container-fluid">
            <Link className="nav-link navbar-brand" to={'/'}>SUMMIT</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarColor01">
               <ul className="navbar-nav me-auto">
                  <Dropdown lista={dropLista}/>
               </ul>
               <CartWidget />
            </div>
         </div>
      </nav>
      </>
   );
}

export default Navbar;
