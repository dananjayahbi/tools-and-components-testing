// Backend routes code (routes.js)
const express = require('express');
const router = express.Router();
const { getDummyText } = require("../controllers/dummyTextController");

// Route to get dummy text
router.post("/getDummyText", getDummyText);

module.exports = router;
