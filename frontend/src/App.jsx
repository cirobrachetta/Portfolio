import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import About from './components/About';
import ProjectsCarousel from './components/ProjectsCarousel';
import Skills from './components/Skills';

function App() {
  return (
    <>
      <Header />
      <About />
      <ProjectsCarousel />
      <Skills />
    </>
  );
}

export default App;