import React from "react";

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      {/* Background Blur Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-0"></div>

      <div className="relative z-10 w-full max-w-4xl px-4 py-10 text-center">
        <h1
          className="text-5xl font-bold text-white mb-6"
          style={{ fontFamily: "Orbitron, sans-serif" }}
        >
          Welcome to the Cyber Event Simulation Platform
        </h1>
        <p className="text-gray-300 text-lg mb-8">
          Dive into a world where technology meets security. Explore our platform that allows you to simulate, analyze, and mitigate Distributed Denial of Service (DDoS) attacks.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-gray-800 bg-opacity-90 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-blue-400 mb-4">Technologies</h2>
            <ul className="text-gray-300 space-y-2">
              <li>React.js (Frontend Framework)</li>
              <li>Node.js & Express (Backend API)</li>
              <li>Prometheus & Grafana (Monitoring)</li>
              <li>AWS EC2 (Cloud Infrastructure)</li>
              <li>Supabase (Database)</li>
            </ul>
          </div>
          <div className="bg-gray-800 bg-opacity-90 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-blue-400 mb-4">Features</h2>
            <ul className="text-gray-300 space-y-2">
              <li>Real-time DDoS Simulation</li>
              <li>Comprehensive Event Registration</li>
              <li>Attack Analytics Dashboard</li>
              <li>Database Connectivity Visualization</li>
              <li>Seamless Cloud Deployment</li>
            </ul>
          </div>
        </div>
        <p className="mt-10 text-gray-400 text-sm">
          Built with passion by cybersecurity enthusiasts.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
