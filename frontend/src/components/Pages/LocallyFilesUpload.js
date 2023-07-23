import React, { useState } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import { DropzoneArea } from "material-ui-dropzone";
import Button from "@material-ui/core/Button";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import "../../styles/dashboard.css";

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

export default function LocalUpload() {
    const classes = useStyles();
    const [uploadedFiles, setUploadedFiles] = useState([]);
    const [dropzoneKey, setDropzoneKey] = useState(0); // Key for resetting the DropzoneArea : (The DropzoneArea component will be remounted and reset after each successful file submission, effectively clearing the dropzone. Users can then continue to upload more files without any files remaining in the dropzone.)
  
    const handleDrop = (files) => {
      setUploadedFiles([...uploadedFiles, ...files]);
    };
  
    const handleSubmit = async () => {
      if (uploadedFiles.length > 0) {
        const formData = new FormData();
        uploadedFiles.forEach((file) => {
          formData.append("files", file);
        });
  
        try {
          await axios.post("http://localhost:8070/uploadFiles/upload", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
  
          // Handle successful file upload
          alert("Files uploaded successfully!");
  
          // Clear the uploaded files after successful upload
          setUploadedFiles([]);
  
          // Reset the DropzoneArea by changing the key
          setDropzoneKey((prevKey) => prevKey + 1);
        } catch (error) {
          // Handle errors
          alert("Error uploading files!");
        }
      } else {
        alert("Please drop files before submitting.");
      }
    }
  
    return (
      <>
        <div>
          <DropzoneArea
            key={dropzoneKey} // Reset the DropzoneArea by changing the key
            onChange={handleDrop}
            acceptedFiles={["image/*", "video/*", "application/*"]}
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
                Submit
            </Button>
        </div>
      </>
    );
  }