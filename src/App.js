import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './components/contact';
import Home from './components/home';
import Navbar from './components/navbar';
import Profile from './components/profile';
import Projects from './components/projects';
import Skill from './components/skills';

function App() {

  return (
    <div className="page-cover w-full h-screen fixed top-0 right-0">
      <Navbar />
      <div className='w-full h-full flex justify-around mt-5'>

        <Profile />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skills" element={<Skill />} />
          <Route path="/work" element={<Projects />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
