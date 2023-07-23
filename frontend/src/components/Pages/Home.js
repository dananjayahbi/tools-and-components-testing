import React from "react";
import "../../styles/home.css";
import ButtonWrapper from "../FormsUI/Button";
import { Routes, Route, useNavigate } from "react-router-dom";
import LocallyFilesUpload from "../Pages/LocallyFilesUpload";

export default function Home() {
  const navigate = useNavigate();

  const handleLinkClick = () => {
    navigate("/uploadFiles");
  };

  return (
    <>
      <div>
        <h1>Dashboard content</h1>
        <ButtonWrapper variant="contained" onClick={handleLinkClick}>
          A DropZone for Upload files in to a designated folder inside the project (inside the backend)
        </ButtonWrapper>
        <Routes>
          <Route exact path="/uploadFiles" element={<LocallyFilesUpload />} />
        </Routes>
      </div>
    </>
  );
}
