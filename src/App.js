import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import Header from './components/Header'; 
import "./App.css";


const linksArray = [
  { to: "/about", label: "About Me" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/contact", label: "Contact" },
  { to: "/resume", label: "Resume" },
];

function App() {
  return (
    <div className="App">
      <Router>
      <Header links={linksArray} />
        <div className="container mt-5">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
