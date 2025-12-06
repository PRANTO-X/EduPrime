import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Teachers from './pages/Teachers';
import Contact from './pages/Contact';
import GetStarted from './pages/GetStarted';
import ScrollToTop from './components/ScrollToTop';
function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-slate-50">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/teachers" element={<Teachers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/get-started" element={<GetStarted />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
