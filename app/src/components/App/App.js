import React, { useState } from 'react';
import PageHeader from '../PageHeader';
import './App.css';
import ModalProvider from '../ModalProvider';
import ModalRoot from '../ModalRoot';
import ProfileInfo from '../ProfileInfo';
import Category from '../Category';

function App() {
  const [positions, setPositions] = useState([])
  return (
    <ModalProvider>
      <div className="App">
        <ModalRoot/>
        <PageHeader title="My Profile" setPositions={setPositions}/>
        <div className="Profile">
            <ProfileInfo name="Adisa Malik" website="http://adisamalik.com" email="adisamalik@gmail.com"/>
            <div className="profile-details">
                <Category positions={positions} setPositions={setPositions} catTitle="experience" />
                <Category positions={positions} setPositions={setPositions} catTitle="education" />
            </div>
        </div>
      </div>
    </ModalProvider>
  );
}

export default App;
