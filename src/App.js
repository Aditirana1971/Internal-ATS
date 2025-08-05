import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import JobForm from './pages/JobForm';
import CandidateUpload from './pages/CandidateUpload';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <div style={{ padding: '20px' }}>
        <h1>Internal ATS</h1>
        <Routes>
          <Route path="/" element={<JobForm />} />
          <Route path="/upload" element={<CandidateUpload />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
