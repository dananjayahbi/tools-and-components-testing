const fs = require("fs");
const path = require("path");

const getFolderStructure = (folderPath, depth) => {
  const folderStructure = {
    name: path.basename(folderPath),
    depth: depth,
    files: [],
    subfolders: [],
  };

  const files = fs.readdirSync(folderPath);

  files.forEach((file) => {
    const filePath = path.join(folderPath, file);
    const stats = fs.statSync(filePath);

    if (stats.isDirectory()) {
      const subfolder = getFolderStructure(filePath, depth + 1);
      folderStructure.subfolders.push(subfolder);
    } else if (stats.isFile()) {
      folderStructure.files.push({
        name: file,
        depth: depth + 1,
      });
    }
  });

  return folderStructure;
};

const getFolderStructureHandler = (req, res) => {
  const designatedFolderPath = path.join(__dirname, "../node_modules"); // Change to the designated folder path

  try {
    const folderStructure = getFolderStructure(designatedFolderPath, 0);
    res.json([folderStructure]); // Wrap the main root folder in an array and send it to the frontend
  } catch (error) {
    console.error("Error getting folder structure:", error);
    res.status(500).json({ message: "Error getting folder structure." });
  }
};

module.exports = {
  getFolderStructureHandler,
};
