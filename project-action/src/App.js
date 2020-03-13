import React,  { useState } from 'react';

import './App.css';
import ProjectList from './components/ProjectsList.js';
import ActionsList from './components/ActionsList';

function App() {
  const [toggle, setToggle] = useState(false);
  const [toggle2, setToggle2] = useState(false);

  const fetchData = () => {
    setToggle(!toggle)
  }
  const fetchData2 = () => {
    setToggle2(!toggle2)
  }

  return (
    <div className="App">
      <div className="App1">
        <ProjectList toggle={toggle} />
        <button onClick={()=>{fetchData()}}>fetch projects</button>
      </div>


      <div className="App2">
        <ActionsList toggle2={toggle2} />
        <button onClick={()=>{fetchData2()}}>fetch Actions</button>
      </div>
    </div>
  );
}

export default App;
