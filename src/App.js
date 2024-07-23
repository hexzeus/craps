import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStyle, Navbar, NavbarBrand, NavbarLinks, NavLink, Footer, Logo, MainImage } from './AppStyles';
import Home from './components/Home';
import Schedule from './components/Schedule';
import Tips from './components/Tips';
import Contact from './components/Contact';
import InteractiveTool1 from './components/InteractiveTool1';
import InteractiveTool2 from './components/InteractiveTool2';
import InteractiveTool3 from './components/InteractiveTool3';
import InteractiveTool4 from './components/InteractiveTool4';
import InteractiveTool5 from './components/InteractiveTool5';
import InteractiveTool6 from './components/InteractiveTool6';
import InteractiveTool7 from './components/InteractiveTool7';
import ScrollToTop from './components/ScrollToTop';
import logo from './images/logo.png';
import mainImage from './images/main.jpg';

function App() {
  return (
    <Router>
      <div className="App">
        <GlobalStyle />
        <ScrollToTop />
        <header>
          <Navbar>
            <NavbarBrand to="/index.html">
              <Logo src={logo} alt="Buffalo Creek Craps Logo" />
              BCCC
            </NavbarBrand>
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
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/tips" element={<Tips />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/interactive-tool1" element={<InteractiveTool1 />} />
            <Route path="/interactive-tool2" element={<InteractiveTool2 />} />
            <Route path="/interactive-tool3" element={<InteractiveTool3 />} />
            <Route path="/interactive-tool4" element={<InteractiveTool4 />} />
            <Route path="/interactive-tool5" element={<InteractiveTool5 />} />
            <Route path="/interactive-tool6" element={<InteractiveTool6 />} />
            <Route path="/interactive-tool7" element={<InteractiveTool7 />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <MainImage src={mainImage} alt="Main Educational Image" />
        <Footer>
          <p>&copy; 2024 Buffalo Creek Craps Class. All rights reserved.</p>
        </Footer>
      </div>
    </Router>
  );
}

export default App;
