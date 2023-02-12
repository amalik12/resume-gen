import React, { useRef, useState } from 'react';
import './App.css';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import ModalProvider from '../ModalProvider';
import ModalRoot from '../ModalRoot';
import ProfileInfo from '../ProfileInfo';
import Category from '../Category';
import Button from '../Button';
import docDefinition from '../../doc-definition';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

function App() {
  const [positions, setPositions] = useState([]);
  const [education, setEducation] = useState([]);
  const [projects, setProjects] = useState([]);
  const hiddenPositions = useRef(new Set());
  const hiddenEducation = useRef(new Set());
  const hiddenProjects = useRef(new Set());

  const bio = {
    name: 'Adisa Malik',
    website: 'http://adisamalik.com',
    email: 'adisamalik@gmail.com',
    location: 'New York, NY',
    github: 'amalik12',
  };

  const generateResume = () => {
    pdfMake
      .createPdf(
        docDefinition(
          bio,
          positions.filter((value) => !hiddenPositions.current.has(value.id)),
          education.filter((value) => !hiddenEducation.current.has(value.id)),
          projects.filter((value) => !hiddenProjects.current.has(value.id))
        )
      )
      .open();
  };

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
              hiddenIds={hiddenPositions}
            />
            <Category
              catTitle="education"
              items={education}
              setItems={setEducation}
              hiddenIds={hiddenEducation}
            />
            <Category
              catTitle="projects"
              items={projects}
              setItems={setProjects}
              hiddenIds={hiddenProjects}
            />
          </div>
        </div>
      </div>
    </ModalProvider>
  );
}

export default App;
