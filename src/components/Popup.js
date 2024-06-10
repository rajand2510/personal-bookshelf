// src/components/Popup.js
import React from 'react';
import './Popup.css';

const Popup = ({ message, onClose }) => (
  <div className="popup">
    <div className="popup-content">
      <span>{message}</span>
      <button onClick={onClose}>Close</button>
    </div>
  </div>
);

export default Popup;
