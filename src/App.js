import React from 'react';
import Card from './Cards/Meals';
import './App.css';
import FavoritesCard from './Cards/Favorites';
import OrderhistoryCard from './Cards/Orderhistory';

function App() {
  return (
    <>
    <div className="App">

  <Card/>
      <FavoritesCard/>
  <OrderhistoryCard/>
      </div>
  </>
  );
}

export default App;
