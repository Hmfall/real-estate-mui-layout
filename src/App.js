import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Favorite from './pages/Favorite';
import Header from './components/header/Header';
import OfferList from './components/OfferList';
import style from './styles/scss/style.scss';
import Offer from './pages/offer/Offer';
import PostOffer from './pages/postOffer/postOffer'
import User from './pages/user/User';

const App = () => {
   return (
      <React.Fragment>
         <Header/>
         <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/offers" element={<OfferList/>}/>
            <Route path="/offers/:id" element={<Offer/>}/>
            <Route path="/add-offer" element={<PostOffer/>}/>
            <Route path="/user" element={<User/>}/>
            <Route path="/favorite" element={<Favorite/>}/>
         </Routes>
      </React.Fragment>
   );
};

export default App;
