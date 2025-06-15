import React from 'react';
import Header from './components/header/Header';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import Proficiency from './components/proficiency/Proficiency';

function App() {
  return (
    <div className="container">

      <Header />
      <Skills />
      <Proficiency/>
      <Projects />
      {/* <Contact /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;