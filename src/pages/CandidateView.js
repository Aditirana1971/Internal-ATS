import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const dummyCandidates = {
  1: {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    phone: '1234567890',
    resumeFileName: 'John_Doe_CV.pdf',
    notes: 'Great communication skills. Prefers remote.',
  },
  2: {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    phone: '9876543210',
    resumeFileName: 'Jane_Smith_CV.pdf',
    notes: 'Strong in Python and ML. Immediate joiner.',
  }
};

function CandidateView() {
  const { id } = useParams();
  const navigate = useNavigate();
  const candidate = dummyCandidates[id];

  if (!candidate) return <div>Candidate not found</div>;

  return (
    <div>
      <h2>Candidate Profile</h2>
      <p><strong>Name:</strong> {candidate.name}</p>
      <p><strong>Email:</strong> {candidate.email}</p>
      <p><strong>Phone:</strong> {candidate.phone}</p>
      <p><strong>Resume:</strong> {candidate.resumeFileName}</p>
      <p><strong>Notes:</strong> {candidate.notes}</p>

      <button onClick={() => navigate(-1)}>← Back to Dashboard</button>
    </div>
  );
}

export default CandidateView;
