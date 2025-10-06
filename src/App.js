import React from 'react';
import MealsCard from './Cards/Meals';
import './App.css';
import FavoritesCard from './Cards/FavoritesCard';
import OrderhistoryCard from './Cards/OrderhistoryCard';
import CheckoutCard from './Cards/CheckoutCard';

function App() {
  return (
    <>
    <div className="App">

  <MealsCard/>
      <FavoritesCard/>
  <OrderhistoryCard/>
  <CheckoutCard/>
      </div>
  </>
  );
}

export default App;
