import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './Components/NavBar'
import Home from './Pages/Home'
import './App.css'
import 'bootstrap'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
