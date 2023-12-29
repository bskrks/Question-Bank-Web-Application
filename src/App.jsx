import React, { useState } from 'react';
import './App.css';
import TestForm from '../src/components/TestForm/index.jsx';
import SideBar from './components/SideBar/index.jsx';
import AnswerList from './components/AnswerList/index.jsx';

function App() {
  const [responseArray, setResponseArray] = useState();

  const responseFunction  = (responseFunction) => {
    setResponseArray(responseFunction);
  }

  return (
    <div className="app">
      <SideBar />
      <TestForm  resFunc={responseFunction} />
      <AnswerList 
        res = {responseArray}
      />
    </div>
  );
}

export default App;
