import React from 'react';
import logo from './assets/sondermgmtlogo.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="content-wrapper">
        <img className="logo" src={logo} alt="Logo" />
        <a className="contact-button" href="mailto:contact@sondermgmt.co">Get in touch</a>
      </div>
    </div>
  );
}

// contact@sondermgmt.com

export default App;
