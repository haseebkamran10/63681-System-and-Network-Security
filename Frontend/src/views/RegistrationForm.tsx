import React, { useState } from "react";
import { registerUser } from "../utils/api";

const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
  });

  const [success, setSuccess] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await registerUser(formData);
      setSuccess("Registration successful!");
      setFormData({ name: "", email: "", phone: "", country: "" });
    } catch (error) {
      setSuccess("Registration failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black/90">
      {/* Background Blur Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-0"></div>

      <div className="relative z-10 w-full max-w-lg bg-gray-900 rounded-lg shadow-lg p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-center text-white mb-6">
          Register for the Event
        </h2>
        {success && (
          <p
            className={`text-center mb-4 ${
              success.includes("successful")
                ? "text-green-400"
                : "text-red-400"
            }`}
          >
            {success}
          </p>
        )}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Input */}
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-gray-800 border border-gray-600 text-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder-gray-500"
              placeholder="Enter your name"
            />
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-gray-800 border border-gray-600 text-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder-gray-500"
              placeholder="Enter your email"
            />
          </div>

          {/* Phone Input */}
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Phone
            </label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-gray-800 border border-gray-600 text-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder-gray-500"
              placeholder="Enter your phone number"
            />
          </div>

          {/* Country Input */}
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Country
            </label>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-gray-800 border border-gray-600 text-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder-gray-500"
              placeholder="Enter your country"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 px-4 text-white font-bold bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
