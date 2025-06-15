import React from 'react';
import Header from './components/header/Header';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import Proficiency from './components/proficiency/Proficiency';
import Experience from './components/experience/Experience';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div className="container">

      <Header />
      <Skills />
      <Proficiency/>
      <Projects />
      <Experience/>
      <Contact />
      {/* <Footer /> */}
    </div>
  );
}

export default App;