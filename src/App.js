import React from 'react';
import MealsCard from './Cards/Meals';
import './App.css';
import FavoritesCard from './Cards/FavoritesCard';
import OrderhistoryCard from './Cards/OrderhistoryCard';

function App() {
  return (
    <>
    <div className="App">

  <MealsCard/>
      <FavoritesCard/>
  <OrderhistoryCard/>
      </div>
  </>
  );
}

export default App;
