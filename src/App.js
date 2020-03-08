import React from 'react';
import './Reka.css';
import RekaFace from './Reka.js';
import ClaudiaFace from './Claudia.js';
import IonaFace from './Iona.js';
import './App.css';

function App() {
  return (
    <div class='faces'>
      <div>
        <RekaFace />
      </div>
      <div>
        <ClaudiaFace />
      </div>
      <div>
        <IonaFace />
      </div>
    </div>
      
  );
}

export default App;
