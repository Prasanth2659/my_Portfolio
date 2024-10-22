import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Education from './components/Education';
import Projects from './components/Projects';
import Technologies from './components/Technologies';
import Contact from './components/Contact';


function App() {
  return (
    <Router>
      <div className="App">
        {/* Use Routes instead of Switch */}
        <Routes>
          {/* Home Route */}
          <Route path="/" element={<Home />} />
          
          {/* Other Routes */}
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Catch-all for unknown routes */}
          <Route path="*" element={<h2>404 Not Found</h2>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
