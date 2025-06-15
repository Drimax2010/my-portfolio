import React from 'react';
import Header from './components/header/Header';
import Projects from './components/projects/Projects';
import Hero from './components/hero/hero'
// importa About, Contact, Footer...

function App() {
  return (
    <div className="container">

      <Header />
      {/*<Hero /> */}
      {/* <About /> */}
      <Projects />
      {/* <Contact /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;