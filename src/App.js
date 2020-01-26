import React from 'react';
import logo from './assets/sondermgmtlogo.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="content-wrapper">
        <img src={logo} alt="Logo" />
        <button className="contact-button">Get in touch</button>
      </div>
    </div>
  );
}

export default App;
