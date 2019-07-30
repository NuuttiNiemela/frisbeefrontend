import React from 'react';
import logo from './logo.svg';
import './App.css';
import {getAll} from "./Serviceclient";
import Paasivu from "./components/Paasivu";

function App() {
  return (
    <div className="App">
      <Paasivu/>
    </div>
  );
}

export default App;
