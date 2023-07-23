const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadPath = path.join(__dirname, "../local-files");

    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }

    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  // Check if the file is a .zip file
  if (file.mimetype === "application/zip" || file.originalname.endsWith(".zip")) {
    cb(null, true);
  } else {
    cb(new Error("Please upload a .zip file."));
  }
};

const upload = multer({ storage, fileFilter }).array("files", 10);

const { uploadFile } = require("../controllers/zipExtractController");

router.post("/upload", upload, (req, res) => {
  uploadFile(req, res); // Call the uploadFile function here
});

module.exports = router;
