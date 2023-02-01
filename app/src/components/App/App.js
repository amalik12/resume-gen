import React, { useState } from "react";
import "./App.css";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import ModalProvider from "../ModalProvider";
import ModalRoot from "../ModalRoot";
import ProfileInfo from "../ProfileInfo";
import Category from "../Category";
import Button from "../Button";
import docDefinition from "../../doc-definition";

pdfMake.vfs = pdfFonts.pdfMake.vfs;

function App() {
  const [positions, setPositions] = useState([]);
  const [education, setEducation] = useState([]);
  const [projects, setProjects] = useState([]);

  const bio = {
    name: "Adisa Malik",
    website: "http://adisamalik.com",
    email: "adisamalik@gmail.com",
    location: "New York, NY",
    github: "amalik12",
  };

  const generateResume = () =>
    pdfMake
      .createPdf(docDefinition(bio, positions, education, projects))
      .open();

  return (
    <ModalProvider>
      <div className="App">
        <ModalRoot />
        <div className="PageHeader">
          <span className="page-title">My Profile</span>
          <Button onClick={generateResume}>Resume</Button>
        </div>
        <div className="Profile">
          <ProfileInfo
            name={bio.name}
            website={bio.website}
            email={bio.email}
          />
          <div className="profile-details">
            <Category
              catTitle="positions"
              items={positions}
              setItems={setPositions}
            />
            <Category
              catTitle="education"
              items={education}
              setItems={setEducation}
            />
            <Category
              catTitle="projects"
              items={projects}
              setItems={setProjects}
            />
          </div>
        </div>
      </div>
    </ModalProvider>
  );
}

export default App;
