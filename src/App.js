import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import About from "./components/About";
import Portfolio from "./components/Portfolio"
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer'

import "./App.css";

const linksArray = [
  { to: "/sj_react_portfolio/about", label: "About Me" },
  { to: "/sj_react_portfolio/portfolio", label: "Portfolio" },
  { to: "/sj_react_portfolio/contact", label: "Contact" },
  { to: "/sj_react_portfolio/resume", label: "Resume" },
]
function App() {
  return (
    
    <div className="App">
      <Router>
      <Navbar links = {linksArray} />
      <div>
      <Routes>
            <Route path="/sj_react_portfolio/" element={<About />} />
            <Route path="/sj_react_portfolio/about" element={<About />} />
            <Route path="/sj_react_portfolio/portfolio" element={<Portfolio />} />
            <Route path="/sj_react_portfolio/contact" element={<Contact />} />
            <Route path="/sj_react_portfolio/resume" element={<Resume />} />
      </Routes>
      </div>
<Footer/>
      </Router>
    </div>
  );
}

export default App;
