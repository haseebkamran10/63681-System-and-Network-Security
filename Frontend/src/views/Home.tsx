import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    return (
        <div className="h-screen flex flex-col items-center justify-center bg-gray-100 text-center">
            <h1 className="text-5xl font-bold text-blue-600">Welcome to the Event Registration Platform</h1>
            <p className="text-lg text-gray-600 mt-4">Seamlessly manage registrations and view real-time statistics.</p>
            <div className="mt-8 flex space-x-4">
                <Link
                    to="/register"
                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg shadow-lg"
                >
                    Register Now
                </Link>
                <Link
                    to="/dashboard"
                    className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-6 rounded-lg shadow-lg"
                >
                    View Dashboard
                </Link>
            </div>
        </div>
    );
};

export default Home;
