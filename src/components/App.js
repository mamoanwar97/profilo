import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './Main.js';
import '../App.css';

function App() {
  return (
    <BrowserRouter>
      <Main className="App"/>
    </BrowserRouter>
  );
}

export default App;
