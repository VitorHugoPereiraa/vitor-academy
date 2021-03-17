import React from 'react';
import './App.css'

import Header from './components/Header'
import Banner from './components/Banner'
import Linguages from './components/Linguages'
import Prices from './components/Prices'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Linguages />
      <Prices />
      <Footer />
    </div>
  )
}

export default App
