import React from 'react';
import './Iona.css';

function IonaFace() {
  return(
    <div class='iona'>
      <div class='iona-backdrop'></div>
      <div class='iona-hair'></div>
      <div class='body-container'>
        <div class='iona-body'></div>
        <div class='iona-tshirt'></div>
      </div>
      <div class='iona-neck'></div>
      <div class='iona-face'>
        <div class='left-eyebrow'></div>
        <div class='right-eyebrow'></div>
        <div class='iona-parting-right'></div>
        <div class='iona-parting-left'></div>
        <div class='iona-left-eye'></div>
        <div class='top-eye-left'></div>
        <div class='iona-right-eye'></div>
        <div class='top-eye-right'></div>
        <div class='iona-nose'></div>
        <div class='mouth'>
            <div class='teeth'></div>
            <div class='tongue'></div>
        </div>
      </div>
    </div>
  )
}

export default IonaFace;