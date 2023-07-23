const fs = require("fs");
const path = require("path");
const unzipper = require("unzipper");

const extractAndSaveFiles = async (zipFilePath, extractPath) => {
  try {
    await fs.createReadStream(zipFilePath).pipe(unzipper.Extract({ path: extractPath })).promise();
    return true;
  } catch (error) {
    console.error("Error extracting zip file:", error);
    return false;
  }
};

const isZipFile = (file) => {
  return file.mimetype === "application/zip" || file.originalname.endsWith(".zip");
};

const uploadFile = async (req, res) => {
  const files = req.files;

  if (!files || files.length === 0) {
    return res.status(400).json({ message: "No files uploaded." });
  }

  // Check if all uploaded files are zip files
  if (!files.every(isZipFile)) {
    return res.status(400).json({ message: "Please upload a .zip file." });
  }

  const zipFile = files[0];
  const zipFilePath = zipFile.path;

  const zipFileName = zipFile.originalname.replace(".zip", ""); // Remove the .zip extension from the name
  const extractPath = path.join(__dirname, `../local-files/${zipFileName}`);

  // Create a folder with the zip file's name
  try {
    fs.mkdirSync(extractPath, { recursive: true });
  } catch (error) {
    console.error("Error creating folder:", error);
    return res.status(500).json({ message: "Error creating folder for extracted files." });
  }

  const extractionSuccess = await extractAndSaveFiles(zipFilePath, extractPath);

  if (extractionSuccess) {
    // Delete the zip file after extraction
    fs.unlinkSync(zipFilePath);

    // File upload and extraction were successful
    return res.json({ message: "Files uploaded and extracted successfully." });
  } else {
    // Error occurred during extraction
    return res.status(500).json({ message: "Error extracting files from zip." });
  }
};

module.exports = {
  uploadFile,
};
