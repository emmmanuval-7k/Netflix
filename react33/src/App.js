import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner';
import Next from './components/Next/Next';
import Card from './components/Card/Card';
import Deatails from './components/Deatails/Deatails';
import Hook from './components/Hook/Hook';
import Last from './components/Card/Last/Last';
import Contact from './components/Card/Last/Contact/Contact';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Next />
      <Card />
      <Deatails />
      <Hook />
      <Last />
      <Contact />
    </div>
  );
}

export default App
