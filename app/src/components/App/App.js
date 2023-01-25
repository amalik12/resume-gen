import React from "react";
import "./App.css";
import ModalProvider from "../ModalProvider";
import ModalRoot from "../ModalRoot";
import ProfileInfo from "../ProfileInfo";
import Category from "../Category";

function App() {
  return (
    <ModalProvider>
      <div className="App">
        <ModalRoot />
        <div className="PageHeader">
          <span className="page-title">My Profile</span>
        </div>
        <div className="Profile">
          <ProfileInfo
            name="Adisa Malik"
            website="http://adisamalik.com"
            email="adisamalik@gmail.com"
          />
          <div className="profile-details">
            <Category catTitle="positions" />
            <Category catTitle="education" />
            <Category catTitle="projects" />
          </div>
        </div>
      </div>
    </ModalProvider>
  );
}

export default App;
