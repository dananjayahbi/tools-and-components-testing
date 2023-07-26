// backend/controllers/QRCodeController.js

const qr = require('qrcode');

exports.generateQRCode = async (req, res) => {
  const { text } = req.body;
  try {
    if (!text) throw new Error('Text is required');
    
    const qrCode = await qr.toDataURL(text);
    res.json({ qrCode });
  } catch (error) {
    console.error('Error generating QR code:', error);
    res.status(500).json({ error: 'Failed to generate QR code' });
  }
};
