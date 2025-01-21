import React, { useEffect, useState } from "react";
import { fetchRegistrations } from "../utils/api";

const Dashboard: React.FC = () => {
  const [registrations, setRegistrations] = useState<any[]>([]);

  useEffect(() => {
    const loadRegistrations = async () => {
      try {
        const data = await fetchRegistrations();
        setRegistrations(data);
      } catch (error) {
        console.error("Error fetching registrations:", error);
      }
    };

    loadRegistrations();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      {/* Background Blur Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-0"></div>

      <div className="relative z-10 max-w-5xl w-full px-4 py-10">
        <h1 className="text-4xl font-bold text-center text-white mb-8" style={{ fontFamily: "Orbitron, sans-serif" }}>
          Event Registrations
        </h1>
        <div className="bg-gray-800 bg-opacity-90 shadow-lg rounded-lg overflow-hidden">
          <table className="table-auto w-full text-white">
            <thead className="bg-blue-500">
              <tr>
                <th className="px-4 py-2">ID</th>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Phone</th>
                <th className="px-4 py-2">Country</th>
              </tr>
            </thead>
            <tbody>
              {registrations.length > 0 ? (
                registrations.map((registration) => (
                  <tr key={registration.id} className="text-center bg-gray-700 hover:bg-gray-600">
                    <td className="border border-gray-600 px-4 py-2">{registration.id}</td>
                    <td className="border border-gray-600 px-4 py-2">{registration.name}</td>
                    <td className="border border-gray-600 px-4 py-2">{registration.email}</td>
                    <td className="border border-gray-600 px-4 py-2">{registration.phone}</td>
                    <td className="border border-gray-600 px-4 py-2">{registration.country}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="text-center py-4 text-gray-400">
                    No registrations found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
