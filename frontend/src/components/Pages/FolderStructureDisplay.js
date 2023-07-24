import React, { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    fontFamily: "Arial, sans-serif",
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
    backgroundColor: "#f5f5f5",
    boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
    borderRadius: "4px",
  },
  folder: {
    marginTop: "5px",
  },
  folderName: {
    fontWeight: "bold",
    color: theme.palette.primary.main,
    marginBottom: "5px",
  },
  fileName: {
    color: "#666",
  },
}));

export default function FolderStructureDisplay() {
  const classes = useStyles();
  const [folderStructure, setFolderStructure] = useState([]);

  useEffect(() => {
    // Fetch the folder structure when the component mounts
    fetchFolderStructure();
  }, []);

  const fetchFolderStructure = async () => {
    try {
      const response = await axios.get("http://localhost:8070/flstruct/folderStructure/");

      // Assuming the response data is an array of folder structure objects
      setFolderStructure(response.data);
    } catch (error) {
      console.error("Error fetching folder structure:", error);
      // Handle the error as needed
    }
  };

  const getFileIcon = (fileName) => {
    const fileExtension = fileName.split(".").pop().toLowerCase();

    // Map file extensions to corresponding icons
    const iconMap = {
        jpg: "🖼️",
        jpeg: "🖼️",
        png: "🖼️",
        gif: "🖼️",
        bmp: "🖼️",
        svg: "🖼️",
        tiff: "🖼️",
        pdf: "📄",
        doc: "🖺",
        docx: "📄",
        xls: "📄",
        xlsx: "📄",
        ppt: "📄",
        pptx: "📄",
        txt: "📄",
        csv: "📄",
        html: "📄",
        css: "📄",
        js: "📄",
        json: "📄",
        xml: "📄",
        mp3: "🎵",
        wav: "🎵",
        ogg: "🎵",
        mp4: "🎥",
        mkv: "🎥",
        avi: "🎥",
        zip: "🗜️",
        rar: "🗜️",
        tar: "🗜️",
        gz: "🗜️",
        exe: "⚙️",
        dmg: "⚙️",
        bat: "⚙️",
        sh: "⚙️",
      // Add more file extensions and icons as needed
    };

    return iconMap[fileExtension] || "📄"; // Default to 📄 icon if extension not found
  };

  const renderFolder = (folder) => {
    const tabSpacing = 20;
    const marginLeft = `${tabSpacing * folder.depth}px`;

    return (
      <div className={classes.folder} key={folder.name} style={{ marginLeft }}>
        <div className={classes.folderName}>
          <span>{folder.name.includes(".") ? getFileIcon(folder.name) : "📁"}</span> {folder.name}
        </div>
        {folder.files && folder.files.map((file) => (
          <div key={file.name} className={classes.fileName} style={{ marginLeft: `${tabSpacing}px` }}>
            <span>{getFileIcon(file.name)}</span> {file.name}
          </div>
        ))}
        {folder.subfolders && folder.subfolders.map((subfolder) => renderFolder(subfolder))}
      </div>
    );
  };

  return (
    <>
        <div className={classes.container}>
            <h1>Folder Structure Display</h1>
            <div>
                {folderStructure.map((folder) => renderFolder(folder, 0))}
            </div>
        </div>
    </>
    
  );


}
