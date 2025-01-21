import axios from 'axios';

const API = axios.create({
    baseURL: 'http://16.171.171.132:3000', // Replace with your VM's public IP
});

// Example: Fetch all registrations
export const fetchRegistrations = async () => {
    const response = await API.get('/registrations');
    return response.data;
};

// Example: Register a new user
export const registerUser = async (userData: {
    name: string;
    email: string;
    phone: string;
    country: string;
}) => {
    const response = await API.post('/registrations', userData);
    return response.data;
};
