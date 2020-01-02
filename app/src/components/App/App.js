import React, { useState } from 'react';
import PageHeader from '../PageHeader';
import './App.css';
import ModalProvider from '../ModalProvider';
import ModalRoot from '../ModalRoot';
import ProfileInfo from '../ProfileInfo';
import Category from '../Category';

function App() {
  const [positions, setPositions] = useState([])
  const [education, setEducation] = useState([])
  return (
    <ModalProvider>
      <div className="App">
        <ModalRoot/>
        <PageHeader title="My Profile" setPositions={setPositions}/>
        <div className="Profile">
            <ProfileInfo name="Adisa Malik" website="http://adisamalik.com" email="adisamalik@gmail.com"/>
            <div className="profile-details">
                <Category items={positions} setItems={setPositions} catTitle="positions" />
                <Category items={education} setItems={setEducation} catTitle="education" />
            </div>
        </div>
      </div>
    </ModalProvider>
  );
}

export default App;
