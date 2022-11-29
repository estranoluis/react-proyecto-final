import React from 'react';
import '../styles/App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './content/Navbar';
import ItemListContainer from './content/ItemListContainer';
import ItemCategoryListContainer from './content/ItemCategoryListContainer';
import ItemDetailContainer from './content/ItemDetailContainer';
import Cart from './content/Cart';
import Checkout from './content/Checkout';
import Error404 from './content/Error404';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:category" element={<ItemCategoryListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
