import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, NavbarBrand, NavbarLinks, NavLink, Footer } from './AppStyles';
import Home from './components/Home';
import Schedule from './components/Schedule';
import Tips from './components/Tips';
import Contact from './components/Contact';

function App() {
  return (
    <Router basename="/craps">
      <div className="App">
        <header>
          <Navbar>
            <NavbarBrand to="/">Craps Training</NavbarBrand>
            <NavbarLinks>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/schedule">Class Schedule</NavLink>
              <NavLink to="/tips">Tips & Resources</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </NavbarLinks>
          </Navbar>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/tips" element={<Tips />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer>
          <p>&copy; 2024 Craps Teaching. All rights reserved.</p>
        </Footer>
      </div>
    </Router>
  );
}

export default App;
