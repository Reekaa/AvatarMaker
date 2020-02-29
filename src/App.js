import React from 'react';
import './App.css';

function App() {
  return (
      <div class='main'>
        <div class='backdrop'></div>

        <div class='curl1'></div>
        <div class='curl2'></div>
        <div class='curl3'></div>
        <div class='curl4'></div>
        <div class='curl5'></div>
        <div class='curl6'></div>

        <div class='body-container'>
          <div class='body'>
            <div class='napkin'></div>
          </div>
        </div>

        <div class='collar'></div>
        <div class='neck'></div>

        <div class='face'>
          <div class='parting'></div>
          {/* <div class='curl7'></div>
          <div class='curl8'></div> */}
          <div class='left-ear'></div>
          <div class='right-ear'></div>
          <div class='left-glass'></div>
          <div class='right-glass'></div>
          <div class='bridge'></div>
          <div class='glass-handle-left'></div>
          <div class='glass-handle-right'></div>
          <div class='left-eye'>
            <div class='eye-left'></div>
          </div>
          <div class='right-eye'>
            <div class='eye-right'></div>
          </div>
          <div class='nose'></div>
          <div class='mouth'>
            <div class='teeth'></div>
            <div class='tongue'></div>
          </div>
        </div>
      </div>
  );
}

export default App;
