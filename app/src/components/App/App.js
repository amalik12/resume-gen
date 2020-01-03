import React, { useState } from 'react';
import './App.css';
import ModalProvider from '../ModalProvider';
import ModalRoot from '../ModalRoot';
import ProfileInfo from '../ProfileInfo';
import Category from '../Category';
import HeaderButton from '../HeaderButton/HeaderButton';

function App() {
  const [positions, setPositions] = useState([])
  const [education, setEducation] = useState([])
  const [projects, setProjects] = useState([])
  return (
    <ModalProvider>
      <div className="App">
        <ModalRoot/>
        <div className="PageHeader">
            <span className="page-title">My Profile</span>
            <HeaderButton name="Add Content" setPositions={setPositions} setEducation={setEducation} setProjects={setProjects}/>
        </div>
        <div className="Profile">
            <ProfileInfo name="Adisa Malik" website="http://adisamalik.com" email="adisamalik@gmail.com"/>
            <div className="profile-details">
                <Category items={positions} setItems={setPositions} catTitle="positions" />
                <Category items={education} setItems={setEducation} catTitle="education" />
                <Category items={projects} setItems={setProjects} catTitle="projects" />
            </div>
        </div>
      </div>
    </ModalProvider>
  );
}

export default App;
