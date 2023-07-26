// backend/controllers/QRCodeController.js

const qr = require('qrcode');

exports.generateQRCode = async (req, res) => {
  const { url } = req.body;
  try {
    if (!url) throw new Error('URL is required');
    
    const qrCode = await qr.toDataURL(url);
    res.json({ qrCode });
  } catch (error) {
    console.error('Error generating QR code:', error);
    res.status(500).json({ error: 'Failed to generate QR code' });
  }
};
