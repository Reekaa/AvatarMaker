import React from 'react';
import './Reka.css';

function RekaFace() {
  return (
    <div class='reka'>
      <div class='background'></div>

      <div class='curl1'></div>
      <div class='curl2'></div>
      <div class='curl3'></div>
      <div class='curl4'></div>
      <div class='curl5'></div>
      <div class='curl6'></div>

      <div class='reka-body-container'>
        <div class='reka-body'>
          <div class='napkin'></div>
        </div>
      </div>

      <div class='reka-collar'></div>
      <div class='reka-neck'></div>

      <div class='reka-face'>
        <div class='reka-parting'></div>
        {/* <div class='curl7'></div>
          <div class='curl8'></div> */}
        <div class='reka-left-ear'></div>
        <div class='reka-right-ear'></div>
        <div class='reka-left-glass'></div>
        <div class='reka-right-glass'></div>
        <div class='reka-bridge'></div>
        <div class='glass-handle-left'></div>
        <div class='glass-handle-right'></div>
        <div class='reka-left-eye'>
          <div class='eye-left'></div>
        </div>
        <div class='reka-right-eye'>
          <div class='eye-right'></div>
        </div>
        <div class='reka-nose'></div>
        <div class='reka-mouth'>
          <div class='reka-teeth'></div>
          <div class='reka-tongue'></div>
        </div>
      </div>
    </div>
  );
}

export default RekaFace;
