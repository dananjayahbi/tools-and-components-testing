import React from "react";
import "../../styles/home.css";
import ButtonWrapper from "../FormsUI/Button";
import { Routes, Route, useNavigate } from "react-router-dom";
import LocallyFilesUpload from "./LocallyFilesUpload";
import ZipExtract from "./ZipExtract";
import FolderStructureDisplay from "./FolderStructureDisplay";

export default function Home() {
  const navigate = useNavigate();

  const handleLinkClick1 = () => {
    navigate("/uploadFiles");
  }; 

  const handleLinkClick2 = () => {
    navigate("/zipExtract");
  }; 

  const handleLinkClick3 = () => {
    navigate("/flStruct");
  }; 

  return (
    <>
      <div>
        <ButtonWrapper variant="contained" onClick={handleLinkClick1}>
          A DropZone for Upload files in to a designated folder inside the project (inside the backend)
        </ButtonWrapper> <br /> <br />
        <ButtonWrapper variant="contained" onClick={handleLinkClick2}>
          A DropZone for Upload zip files and the system will extract it
        </ButtonWrapper> <br /> <br />
        <ButtonWrapper variant="contained" onClick={handleLinkClick3}>
          Display the folder structure of a designated folder
        </ButtonWrapper>
        <Routes>
          <Route exact path="/uploadFiles" element={<LocallyFilesUpload />} />
          <Route exact path="/zipExtract" element={<ZipExtract />} />
        </Routes>
      </div>
    </>
  );
}
