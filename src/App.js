import Home from './components/Home'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Projects from './components/Projects'
import About from './components/About'
import Navbar from './components/Navbar'

import {
  BrowserRouter as Router, Routes, Route
} from "react-router-dom";

function App() {
  return (
    <div className="h-screen bg-gradient-to-b from-black to-gray-700">
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

// <img src={logo} className="App-logo" alt="logo" />

export default App;
