import React from 'react'
import './App.css';
const Puuz = ({ imageUrl, header, description }) => {
    return (
      <div className="product-card">
        <img className="product-image" src={imageUrl} alt="Product" />
        <div className="product-details">
          <h2 className="product-header">{header}</h2>
          <p className="product-description">{description}</p>
        </div>
      </div>
    );
  };
  export default Puuz