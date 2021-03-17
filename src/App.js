import React from 'react';
import './App.css'

import Header from './components/Header'
import Banner from './components/Banner'
import Linguages from './components/Linguages'
import Prices from './components/Prices'

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Linguages />
      <Prices />
    </div>
  )
}

export default App
