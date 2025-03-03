import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AddChannels from './components/AddChannels';
import AddPlans from './components/AddPlans';
import DisplayPlans from './components/DisplayPlans';
import FindPlans from './components/FindPlans';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/add-channels" element={<AddChannels />} />
          <Route path="/add-plans" element={<AddPlans />} />
          <Route path="/display-plans" element={<DisplayPlans />} />
          <Route path="/find-plans" element={<FindPlans />} />
          <Route path="/" element={<DisplayPlans />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
