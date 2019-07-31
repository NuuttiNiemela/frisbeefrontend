import React from 'react';
import logo from './logo.svg';
import './App.css';
import {getAll} from "./Serviceclient";
import Paasivu from "./components/Paasivu";
import Navigointi from "./components/Navigointi";

function App() {
  return (
    <div className="App">
      <Paasivu/>
    </div>
  );
}

export default App;
