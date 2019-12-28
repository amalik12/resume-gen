import React from 'react';
import PageHeader from '../PageHeader';
import Profile from '../Profile';
import './App.css';
import ModalProvider from '../ModalProvider/ModalProvider';
import ModalRoot from '../ModalRoot/ModalRoot';

function App() {
  return (
    <ModalProvider>
      <div className="App">
        <ModalRoot/>
        <PageHeader title="My Profile"/>
        <Profile/>
      </div>
    </ModalProvider>
  );
}

export default App;
