// frontend/components/ProductQR.js

import React, { useState } from 'react';
import { Box, Button, Container, TextareaAutosize } from '@mui/material';
import TextField from "@mui/material/TextField";

const TextToQR = () => {
  const [text, setText] = useState('');
  const [qrCodeImage, setQRCodeImage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8070/TextToQR/generateQR', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text }),
      });
      const data = await response.json();
      setQRCodeImage(data.qrCode);
    } catch (error) {
      console.error('Error generating QR code:', error);
    }
  };

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: (theme) => theme.spacing(2),
      }}
    >
      <TextField
        sx={{
          width: '500px',
          resize: 'none',
          marginBottom: (theme) => theme.spacing(2),
          padding: (theme) => theme.spacing(1),
          fontSize: '16px',
        }}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text"
        rowsMin={5}
      />
      <Button variant="contained" sx={{marginBottom:"25px"}} color="primary" onClick={handleSubmit}>
        Generate QR Code
      </Button>
      {qrCodeImage && (
        <img
          sx={{
            maxWidth: '100%',
            height: 'auto',
          }}
          src={qrCodeImage}
          alt="Generated QR Code"
        />
      )}
    </Container>
  );
};


export default TextToQR;
