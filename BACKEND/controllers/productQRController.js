// backend/controllers/productQRController.js

const qr = require('qrcode');

exports.generateQRCode = async (req, res) => {
  const { productName, productId, productPrice } = req.body;
  try {
    if (!productName || !productId || !productPrice) {
      throw new Error('Product details are required');
    }

    const productDetailsString = `Product Name: ${productName}, Product ID: ${productId}, Product Price: ${productPrice}`;
    const qrCode = await qr.toDataURL(productDetailsString);
    res.json({ qrCode });
  } catch (error) {
    console.error('Error generating QR code:', error);
    res.status(500).json({ error: 'Failed to generate QR code' });
  }
};
