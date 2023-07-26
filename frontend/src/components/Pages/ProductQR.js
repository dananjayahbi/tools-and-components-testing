// frontend/components/ProductQR.js

import React, { useState } from 'react';

const ProductQR = () => {
  const [productDetails, setProductDetails] = useState({});
  const [qrCodeImage, setQRCodeImage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8070/ProductQR/generateQR', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productDetails),
      });
      const data = await response.json();
      setQRCodeImage(data.qrCode);
    } catch (error) {
      console.error('Error generating QR code:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={productDetails.productName || ''}
          onChange={(e) => setProductDetails({ ...productDetails, productName: e.target.value })}
          placeholder="Enter Product Name"
        />
        <input
          type="text"
          value={productDetails.productId || ''}
          onChange={(e) => setProductDetails({ ...productDetails, productId: e.target.value })}
          placeholder="Enter Product ID"
        />
        <input
          type="number"
          value={productDetails.productPrice || ''}
          onChange={(e) => setProductDetails({ ...productDetails, productPrice: e.target.value })}
          placeholder="Enter Product Price"
        />
        <button type="submit">Generate QR Code</button>
      </form>
      {qrCodeImage && <img src={qrCodeImage} alt="Generated QR Code" />}
    </div>
  );
};

export default ProductQR;
