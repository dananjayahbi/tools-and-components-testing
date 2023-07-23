const fs = require("fs");
const path = require("path");

const uploadFile = (req, res) => {
  const files = req.files;

  if (!files || files.length === 0) {
    return res.status(400).json({ message: "No files uploaded." });
  }

  // File upload was successful
  res.json({ message: "Files uploaded successfully." });
};

module.exports = {
  uploadFile,
};
