import React from 'react';
import './App.css';
import TestForm from '../src/components/TestForm/index.jsx';
import SideBar from './components/SideBar/index.jsx';
import AnswerList from './components/AnswerList/index.jsx';

function App() {
  return (
    <div className="app">
      <SideBar />
      <TestForm />
      <AnswerList />
    </div>
  );
}

export default App;
