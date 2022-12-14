import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

const Dropdown = ({lista}) => {
   const [list, setList] = useState([]);
   useEffect(() => {
      const dropList = lista.map((categoria, i) =>
         <Link key={i} className="dropdown-item" to={`/category/${categoria.toLowerCase()}`}>{categoria}</Link>
      )
      setList(dropList)
   }, [lista])

   return (
      <>
      <li className="nav-item dropdown">
         <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="a" role="button" aria-haspopup="true" aria-expanded="false">Categorias</a>
         <div className="dropdown-menu">
            {list}
         </div>
      </li>
      </>
   );
}

export default Dropdown;
