import React,  { useState } from 'react';

import './App.css';
import ProjectList from './components/ProjectsList.js';

function App() {
  const [toggle, setToggle] = useState(false);
  const fetchData = () => {
    setToggle(!toggle)
  }

  return (
    <div className="App">
      <ProjectList toggle={toggle} />
      <button onClick={()=>{fetchData()}}>fetch projects</button>
    </div>
  );
}

export default App;
