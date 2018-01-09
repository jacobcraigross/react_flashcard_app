import React, { Component } from 'react';
import './card.css';

const Card = (props) => (
  <div className = 'card-container'>
    <div className = 'card'>
      <div className = 'front'>
        <div className = 'english'>English word here.</div>
      </div>

      <div className = 'back'>
        <div className = 'javascript'>js code here.</div>
        <div className = 'python'>py code here.</div>
      </div>
    </div>
  </div>
)

export default Card
