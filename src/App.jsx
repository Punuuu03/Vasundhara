import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './components/Home/Home';
import Home2 from './components/Home/Home2';
import Home3 from './components/Home/Home3';
import Home4 from './components/Home/Home4';
import Aboutus from './components/Aboutus/Aboutus';
import Team from './components/Aboutus/Team';
import TeamPage from './components/Aboutus/TeamPage';
import About from './components/Aboutus/About'; // Ensure the path is correct
import About1 from './components/Aboutus/About1';
import Media from './components/Aboutus/Media';
import Media1 from './components/Aboutus/Media1';
import VolunteerForm from './components/GetInvolved/VolunteerForm';
import TreePlantation from './components/Project/TreePlantation';
import TreePlantation1 from './components/Project/TreePlantation1';
import TreePlantation2 from './components/Project/TreePlantation2';
import TreePlantationSchool from './components/Project/TreePlantationSchool';
import TreePlantationSchool1 from './components/Project/TreePlantationInSchool1';
import AwarenessTr from './components/Project/AwarenessTr';
import AwarenessTr1 from './components/Project/AwarenessTr1';
import AwarenessTr3 from './components/Project/AwarenessTr3';
import Seed from './components/Project/Seed';
import Seed1 from './components/Project/Seed1';
import Seed2 from './components/Project/Seed2';
import Gallery from './components/Gallery/Gallery';

import './index.css'; // TailwindCSS styles
import Contact from './components/Contact/Contactus';
import Contact1 from './components/Contact/Contact1';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<><Home /><Home2 /><Home3 /><Home4 /></>} />
        
        {/* Render both Home and Home2 on the /home route */}
        <Route path="/home" element={<><Home /><Home2 /><Home3 /><Home4 /></>} />
        
        {/* Aboutus routes */}
        <Route path="/aboutus" element={<><Aboutus /><Team /><TeamPage /></>} />
        
        {/* About page routes */}
        <Route path="/about" element={<><About /><About1 /></>} />
        
        {/* Media routes */}
        <Route path="/media" element={<><Media /><Media1 /></>} />
        
        {/* Volunteer form */}
        <Route path="/volunteerForm" element={<VolunteerForm />} />
        
        {/* Tree Plantation routes */}
        <Route path="/treePlantation" element={<><TreePlantation /><TreePlantation1 /><TreePlantation2 /></>} />
        
        {/* Tree Plantation School routes */}
        <Route path="/treePlantationschool" element={<><TreePlantationSchool /><TreePlantationSchool1 /></>} />
        
        {/* Awareness Tree routes */}
        <Route path="/awarenessTr" element={<><AwarenessTr /><AwarenessTr1 /><AwarenessTr3 /></>} />
        <Route path="/seed" element={<><Seed/> <Seed1/>  <Seed2/></>} />
        <Route path="/contact" element={<><Contact/> <Contact1/> </>} />
        <Route path="/gallery" element={<><Gallery/>  </>} />
      </Routes>
      {/* Footer */}
      <Footer />
    </Router>
  );
}

export default App;
