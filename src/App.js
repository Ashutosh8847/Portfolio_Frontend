// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './pages/Navbar';
import OverView from './pages/OverView';
import Experience from './pages/Experience';
import Skill from './pages/Skill';
import Project from './pages/Project';
import Contact from './pages/Contact';
// import NoPage from './pages/NoPage';
// import RnavTest from './pages/RnavTest';

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <OverView/>
    {/* <RnavTest/>
  <OverView/>   */}
    
    <Routes>
    {/* <Route path="/" element={<OverView />} /> */}
        {/* <Route path="/overview" element={<OverView />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/skills" element={<Skill />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />  */}
        {/* <Route path="*" element={<NoPage />} /> */}
    </Routes>
  </BrowserRouter>
  );
}

export default App;
