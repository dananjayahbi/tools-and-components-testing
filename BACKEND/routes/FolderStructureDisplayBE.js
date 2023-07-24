const express = require("express");
const router = express.Router();

const { getFolderStructureHandler } = require("../controllers/folderStructureDisplayController");

router.get("/folderStructure", getFolderStructureHandler);

module.exports = router;
