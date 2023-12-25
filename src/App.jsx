import React from 'react';
import './App.css';
import TestForm from '../src/components/TestForm/index.jsx';
import SideBar from './components/SideBar/index.jsx';

function App() {
  return (
    <div className="app">
      <SideBar />
      <TestForm/>
    </div>
  );
}

export default App;
