import React, { useState } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import { DropzoneArea } from "material-ui-dropzone";
import Button from "@material-ui/core/Button";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import "../../styles/dashboard.css";

/* Consider that this component is using the same BACKEND files 
   of the "LocallyFilesUpload" which is : "locallyFilesUploadController.js" 
   and "locallyFilesUpload.js" */

const useStyles = makeStyles((theme) => ({
  dropzone: {
    minHeight: "150px",
    border: `2px dashed ${theme.palette.primary.main}`,
    borderRadius: "4px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    padding: theme.spacing(4),
    cursor: "pointer",
  },
  uploadIcon: {
    fontSize: "2rem",
    marginBottom: theme.spacing(1),
  },
}));

export default function ZipExtract() {
    const classes = useStyles();
    const [uploadedFiles, setUploadedFiles] = useState([]);
    const [dropzoneKey, setDropzoneKey] = useState(0);
  
    const handleDrop = (files) => {
      setUploadedFiles([...uploadedFiles, ...files]);
    };
  
    const isZipFile = (file) => {
      return file.type === "application/zip" || file.name.endsWith(".zip");
    };
  
    const handleSubmit = async () => {
      if (uploadedFiles.length > 0) {
        // Check if all uploaded files are zip files
        if (uploadedFiles.every(isZipFile)) {
          const formData = new FormData();
          uploadedFiles.forEach((file) => {
            formData.append("files", file);
          });
  
          try {
            await axios.post("http://localhost:8070/upZip/upload", formData, {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            });
  
            // Handle successful file upload
            alert("Files uploaded and extracted successfully!");
  
            // Clear the uploaded files after successful upload
            setUploadedFiles([]);
  
            // Reset the DropzoneArea by changing the key
            setDropzoneKey((prevKey) => prevKey + 1);
          } catch (error) {
            // Handle errors
            console.error(error);
            alert("Error uploading files. Please make sure you are uploading a .zip file.");
          }
        } else {
          alert("Please upload a .zip file.");
        }
      } else {
        alert("Please drop files before submitting.");
      }
    };
  
    return (
      <>
      <div><h1>Zip file Extract</h1></div>
        <div>
          <DropzoneArea
            key={dropzoneKey} // Reset the DropzoneArea by changing the key
            onChange={handleDrop}
            acceptedFiles={[".zip"]}
            dropzoneText="Drag and drop files here or click"
            showAlerts={false}
            dropzoneClass={classes.dropzone}
            filesLimit={10} // Maximum number of files allowed to upload
            initialFiles={uploadedFiles} // Show already uploaded files
          />
        </div>
        <div style={{ display: "flex", justifyContent: "right", marginTop: "10px" }}>
            <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
                startIcon={<CloudUploadIcon />}
            >
                Submit and Extract
            </Button>
        </div>
      </>
    );
  }