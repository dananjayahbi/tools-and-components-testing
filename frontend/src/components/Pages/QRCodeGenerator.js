// frontend/components/QRCodeGenerator.js

import React, { useState } from 'react';

const QRCodeGenerator = () => {
  const [url, setURL] = useState('');
  const [qrCodeImage, setQRCodeImage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8070/QRCodeGenerator/generateQR', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
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
          value={url}
          onChange={(e) => setURL(e.target.value)}
          placeholder="Enter URL"
        />
        <button type="submit">Generate QR Code</button>
      </form>
      {qrCodeImage && <img src={qrCodeImage} alt="Generated QR Code" />}
    </div>
  );
};

export default QRCodeGenerator;
