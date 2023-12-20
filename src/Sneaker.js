import React from 'react'

const Sneaker = ({ imageUri, header, description }) => {
  return (
    <div className="product-card">
      <img className="product-image" src={imageUri} alt="Product" />
      <div className="product-details">
        <h2 className="product-header">{header}</h2>
        <p className="product-description">{description}</p>
      </div>
    </div>
  );
};
export default Sneaker