const { supabase } = require('../supabase'); 

exports.register = async (req, res) => {
    const { name, email, phone, country } = req.body;
    try {
        const { data, error } = await supabase
            .from('registrations')
            .insert([{ name, email, phone, country }]);
        if (error) throw error;
        res.status(201).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getRegistrations = async (req, res) => {
    try {
        const { data, error } = await supabase
            .from('registrations')
            .select('*');
        if (error) throw error;
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
