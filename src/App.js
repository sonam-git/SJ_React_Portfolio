import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./App.css";

const linksArray = [
  { to: "/SJ_React_Portfolio/about", label: "About Me" },
  { to: "/SJ_React_Portfolio/portfolio", label: "Portfolio" },
  { to: "/SJ_React_Portfolio/contact", label: "Contact" },
  { to: "/SJ_React_Portfolio/resume", label: "Resume" },
];

function App() {
  return (
    <div className="App">
      <Router>
        <Header links={linksArray} />
        <div className="container mt-5">
          <Routes>
            <Route path="/SJ_React_Portfolio/" element={<About />} />
            <Route path="/SJ_React_Portfolio/about" element={<About />} />
            <Route path="/SJ_React_Portfolio/portfolio" element={<Portfolio />}/>
            <Route path="/SJ_React_Portfolio/contact" element={<Contact />} />
            <Route path="/SJ_React_Portfolio/resume" element={<Resume />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
