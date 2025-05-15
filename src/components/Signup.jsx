import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post('http://localhost:12345/POST', {
        username: formData.username,
        email: formData.email,
        password: formData.password,
      });

      // Assuming response.data.message === "User created successfully"
      alert(response.data.message);
      setLoading(false);

      // Redirect to login or home page after successful signup
      navigate('/login');
    } catch (err) {
  console.error('Signup error:', err);
  setLoading(false);
  if (err.response && err.response.data && err.response.data.message) {
    setError(err.response.data.message);
  } else {
    setError('Failed to create user. Please try again.');
  }
}

  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-white flex">
      {/* Healthcare Image Section */}
      <div className="hidden md:block w-1/2 bg-gray-100">
        <img
          src="https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          alt="Healthcare professionals"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Signup Form Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="flex items-center">
            <svg
              className="h-8 w-8 text-green-600 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M19 8h-1V3H6v5H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zM8 5h8v3H8V5zm8 14H8v-4h8v4zm2-4v2H6v-2H4v-4c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v4h-2z" />
              <circle cx="12" cy="11" r="1" />
            </svg>
            <span className="text-2xl font-bold text-green-600">Create an Account</span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 p-9">
            {error && <p className="text-red-500 text-center">{error}</p>}

            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 p-2">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                required
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-300"
                placeholder="Enter your username"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 p-2">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-300"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 p-2">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-300"
                placeholder="Create a password"
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 p-2">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-300"
                placeholder="Confirm your password"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-300 ${
                loading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {loading ? 'Signing up...' : 'Sign up'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{' '}
              <Link to="/login" className="font-medium text-green-600 hover:text-green-500">
                Login here
              </Link>
            </p>
          </div>

          <div className="mt-8 text-center text-sm text-gray-500">
            <p>
              By signing up, you agree to our{' '}
              <a href="#" className="underline hover:text-gray-600">
                Terms of Service
              </a>{' '}
              and{' '}
              <a href="#" className="underline hover:text-gray-600">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
