  import React, { useState } from 'react';
  import { useNavigate } from 'react-router-dom';
  import axios from 'axios';

  const BookAppointment = () => {
    const [formData, setFormData] = useState({
      email: '',
      phonenumber: '',
      ReasonforVisit: '',
      appointmentdate: '',
    });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const validateForm = (data) => {
      const errors = {};
      if (!data.email) errors.email = 'Email is required.';
      if (!data.phonenumber) errors.phonenumber = 'Phone number is required.';
      if (!data.ReasonforVisit) errors.ReasonforVisit = 'Reason for visit is required.';
      if (!data.appointmentdate) errors.appointmentdate = 'Appointment date is required.';
      return errors;
    };

    const handleSubmit = async (e) => {
      e.preventDefault();

      const validationErrors = validateForm(formData);
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
      }

      setErrors({});
      setLoading(true);

      try {
        const response = await axios.post('http://localhost:12345/post/appoint', formData);
        alert(response.data.message || 'Appointment booked successfully!');
        navigate('/');
      } catch (error) {
        alert(error.response?.data?.message || 'Failed to submit appointment.');
      } finally {
        setLoading(false);
      }
    };

    return (
      <div className="max-w-lg mx-auto mt-8 bg-white shadow-md rounded-lg p-20">
        <h2 className="text-2xl font-semibold text-center text-green-600 mb-6">Book an Appointment</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="mt-1 block w-full border border-gray-300 rounded p-2"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="phonenumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="tel"
              name="phonenumber"
              id="phonenumber"
              value={formData.phonenumber}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="mt-1 block w-full border border-gray-300 rounded p-2"
            />
            {errors.phonenumber && <p className="text-red-500 text-xs mt-1">{errors.phonenumber}</p>}
          </div>

          <div>
            <label htmlFor="appointmentdate" className="block text-sm font-medium text-gray-700">Appointment Date</label>
            <input
              type="date"
              name="appointmentdate"
              id="appointmentdate"
              value={formData.appointmentdate}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded p-2"
            />
            {errors.appointmentdate && <p className="text-red-500 text-xs mt-1">{errors.appointmentdate}</p>}
          </div>

          <div>
            <label htmlFor="ReasonforVisit" className="block text-sm font-medium text-gray-700">Reason for Visit</label>
            <textarea
              name="ReasonforVisit"
              id="ReasonforVisit"
              rows="3"
              value={formData.ReasonforVisit}
              onChange={handleChange}
              placeholder="Enter the reason for your visit"
              className="mt-1 block w-full border border-gray-300 rounded p-2"
            />
            {errors.ReasonforVisit && <p className="text-red-500 text-xs mt-1">{errors.ReasonforVisit}</p>}
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition ${
              loading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {loading ? 'Submitting...' : 'Submit Appointment'}
          </button>
        </form>
      </div>
    );
  };

  export default BookAppointment;
