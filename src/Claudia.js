import React from 'react';
import './Claudia.css';

function ClaudiaFace() {
  return(
    <div class='main'>
      <div class='backdrop'></div>

      <div class='hair'></div>

      <div class='body-container'>
        <div class='body'></div>
      </div>

      <div class='collar'></div>
      <div class='neck'></div>

      <div class='face'>
        <div class='parting'></div>
        <div class='left-ear'></div>
        <div class='right-ear'></div>
        <div class='left-glass'></div>
        <div class='right-glass'></div>
        <div class='bridge'></div>
        <div class='left-eye'></div>
        <div class='right-eye'></div>
        <div class='nose'></div>
        <div class='mouth'>
          <div class='teeth'></div>
          <div class='tongue'></div>
        </div>
      </div>
    </div>
  )
}

export default ClaudiaFace;