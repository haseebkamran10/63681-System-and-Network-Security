import React, { useEffect, useState } from 'react';
import { fetchRegistrations } from '../utils/api';

const Dashboard: React.FC = () => {
    const [registrations, setRegistrations] = useState<any[]>([]);

    useEffect(() => {
        const loadRegistrations = async () => {
            try {
                const data = await fetchRegistrations();
                setRegistrations(data);
            } catch (error) {
                console.error('Error fetching registrations:', error);
            }
        };

        loadRegistrations();
    }, []);

    return (
        <div className="min-h-screen bg-gray-100">
            <div className="max-w-5xl mx-auto py-10">
                <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">Event Registrations</h1>
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <table className="table-auto w-full">
                        <thead className="bg-blue-500 text-white">
                            <tr>
                                <th className="px-4 py-2">ID</th>
                                <th className="px-4 py-2">Name</th>
                                <th className="px-4 py-2">Email</th>
                                <th className="px-4 py-2">Phone</th>
                                <th className="px-4 py-2">Country</th>
                            </tr>
                        </thead>
                        <tbody>
                            {registrations.map((registration) => (
                                <tr key={registration.id} className="text-center">
                                    <td className="border px-4 py-2">{registration.id}</td>
                                    <td className="border px-4 py-2">{registration.name}</td>
                                    <td className="border px-4 py-2">{registration.email}</td>
                                    <td className="border px-4 py-2">{registration.phone}</td>
                                    <td className="border px-4 py-2">{registration.country}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
