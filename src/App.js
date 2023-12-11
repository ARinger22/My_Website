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
    <div className="h-screen bg-gradient-to-b from-black to-gray-900">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/Experience" element={<Experience />} />
          <Route exact path="/Contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

// <img src={logo} className="App-logo" alt="logo" />

export default App;
