import { Box } from '@mui/material';
import { Navbar } from './Pages/Navbar';
import { Home } from './Pages/Home';
import { useRef } from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';



function App() {

  const exploreAboutRef = useRef(null);
  const exploreContactRef = useRef(null);
  const exploreSkillsRef = useRef(null);
  const exploreProjectsRef = useRef(null);

  return (
    <BrowserRouter>
      <Navbar exploreContactRef={exploreContactRef}
        exploreSkillsRef={exploreSkillsRef}
        exploreProjectsRef={exploreProjectsRef}
        exploreAboutRef={exploreAboutRef} />
      <Routes>
        <Route path="/" element={<Home
          exploreAboutRef={exploreAboutRef}
          exploreSkillsRef={exploreSkillsRef}
          exploreProjectsRef={exploreProjectsRef}
          exploreContactRef={exploreContactRef} />} ></Route>

      </Routes>

    </BrowserRouter>


  )

}

export default App
