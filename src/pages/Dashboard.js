import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [candidates, setCandidates] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/candidates");
        setCandidates(response.data);
      } catch (error) {
        console.error("Error fetching candidates:", error);
      }
    };

    fetchCandidates();
  }, []);

  const handleView = (id) => {
    navigate(`/candidate/${id}`);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Candidate Dashboard</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Email</th>
              <th className="py-2 px-4 border-b">Phone</th>
              <th className="py-2 px-4 border-b">Job Role</th>
              <th className="py-2 px-4 border-b">Action</th>
            </tr>
          </thead>
          <tbody>
            {candidates.map((candidate) => (
              <tr key={candidate.id} className="hover:bg-gray-50">
                <td className="py-2 px-4 border-b">{candidate.name}</td>
                <td className="py-2 px-4 border-b">{candidate.email}</td>
                <td className="py-2 px-4 border-b">{candidate.phone}</td>
                <td className="py-2 px-4 border-b">{candidate.jobRole}</td>
                <td className="py-2 px-4 border-b">
                  <button
                    onClick={() => handleView(candidate.id)}
                    className="text-blue-600 hover:underline"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
            {candidates.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center py-4">
                  No candidates found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;

