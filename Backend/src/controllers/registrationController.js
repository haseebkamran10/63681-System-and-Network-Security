// Import the supabase client
const supabase = require('../config/supabase'); // Ensure this path is correct

// Debug: Log the supabase instance to verify it is initialized
console.log('Supabase instance:', supabase);
exports.register = async (req, res) => {
    try {
        console.log('Request body:', req.body);

        const { name, email, phone, country } = req.body;

        if (!name || !email || !phone || !country) {
            return res.status(400).json({ error: 'All fields (name, email, phone, country) are required' });
        }

        console.log('Inserting into Supabase: ', { name, email, phone, country });

        // Insert data into Supabase and return the inserted row
        const insertResult = await supabase
            .from('registrations')
            .insert([{ name, email, phone, country }], { returning: 'representation' });

        console.log('Insert result:', insertResult);

        if (insertResult.error) throw insertResult.error;

        // If `data` contains the inserted row, return it
        if (insertResult.data && insertResult.data.length > 0) {
            return res.status(201).json(insertResult.data[0]); // Return only the inserted row
        }

        // Fallback: Query the inserted row by a unique field, e.g., email
        const { data, error } = await supabase
            .from('registrations')
            .select('*')
            .eq('email', email)
            .order('id', { ascending: false }) // Ensure we get the most recent entry
            .limit(1); // Fetch only one record

        console.log('Fallback query result:', { data, error });

        if (error) throw error;

        if (data && data.length > 0) {
            return res.status(201).json(data[0]); // Return only the most recent row
        }

        // If no data is found, return an error
        throw new Error('Unable to fetch the inserted row.');
    } catch (error) {
        console.error('Error in register:', error.message);
        res.status(500).json({ error: error.message });
    }
};



exports.getRegistrations = async (req, res) => {
    try {
        // Debug: Log before making the Supabase query
        console.log('Fetching all registrations from Supabase');

        const { data, error } = await supabase
            .from('registrations')
            .select('*');

        // Debug: Log the response from Supabase
        console.log('Supabase response (select):', { data, error });

        if (error) throw error;

        res.status(200).json(data);
    } catch (error) {
        // Debug: Log the error
        console.error('Error in getRegistrations:', error.message);
        res.status(500).json({ error: error.message });
    }
};
