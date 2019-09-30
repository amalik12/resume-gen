import React from 'react';
import PageHeader from './PageHeader';
import Profile from './Profile';
import './App.css';

function App() {
  return (
    <div className="App">
      <PageHeader title="My Profile"/>
      <Profile/>
    </div>
  );
}

export default App;
