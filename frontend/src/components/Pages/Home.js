import React from "react";
import "../../styles/home.css";
import ButtonWrapper from "../FormsUI/Button";
import { Routes, Route, useNavigate } from "react-router-dom";
import LocallyFilesUpload from "./LocallyFilesUpload";
import ZipExtract from "./ZipExtract";
import CKEditorComponent from "../OtherComponents/RichTextEditor";
import { useState } from "react";


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

  const handleLinkClick4 = () => {
    navigate("/parallex");
  }; 

  const handleLinkClick5 = () => {
    navigate("/collapseImages");
  }; 

  const handleLinkClick6 = () => {
    navigate("/cardBrowse");
  }; 

  const handleLinkClick7 = () => {
    navigate("/dummyText");
  };

  const handleLinkClick8 = () => {
    navigate("/QRCodeGenerator");
  };

  const handleLinkClick9 = () => {
    navigate("/ProductQR");
  };

  const handleLinkClick10 = () => {
    navigate("/TextToQR");
  };

  const [editorContent, setEditorContent] = useState('');

  const handleContentChange = (data) => {
    setEditorContent(data);
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
        </ButtonWrapper> <br /> <br />
        <ButtonWrapper variant="contained" onClick={handleLinkClick4}>
          Parallex Effect test (Scroll image)
        </ButtonWrapper> <br /> <br />
        <ButtonWrapper variant="contained" onClick={handleLinkClick5}>
          Collapse Images
        </ButtonWrapper> <br /> <br />
        <ButtonWrapper variant="contained" onClick={handleLinkClick6}>
          Cards Gallery slide
        </ButtonWrapper> <br /> <br />
        <ButtonWrapper variant="contained" onClick={handleLinkClick7}>
          Dummy Text Generator
        </ButtonWrapper> <br /> <br />
        <ButtonWrapper variant="contained" onClick={handleLinkClick8}>
          QR code generator
        </ButtonWrapper> <br /> <br />
        <ButtonWrapper variant="contained" onClick={handleLinkClick9}>
          Product QR Code Generator
        </ButtonWrapper> <br /> <br />
        <ButtonWrapper variant="contained" onClick={handleLinkClick10}>
          Text To QR Code Generator
        </ButtonWrapper>

        <CKEditorComponent 
          initialContent={editorContent}
          onContentChange={handleContentChange} 
        />
        <div className="output">
          <h2>Output:</h2>
          <div dangerouslySetInnerHTML={{ __html: editorContent }} />
        </div>

        <Routes>
          <Route exact path="/uploadFiles" element={<LocallyFilesUpload />} />
          <Route exact path="/zipExtract" element={<ZipExtract />} />
        </Routes>
      </div>
    </>
  );
}
