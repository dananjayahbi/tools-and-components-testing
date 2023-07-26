// backend/routes/qrCodeRoutes.js

const express = require('express');
const router = express.Router();
const { generateQRCode } = require('../controllers/textToQrController');

// POST /api/generateQR
router.post('/generateQR', generateQRCode);

module.exports = router;
