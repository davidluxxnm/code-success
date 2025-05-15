import React, { useState } from 'react';

export default function Footer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState(null); // { type: 'success'|'error', message: string }

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    // Basic client validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: 'error', message: 'All fields are required.' });
      return;
    }

    try {
      const res = await fetch('http://localhost:12345/message', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus({ type: 'error', message: data.message || 'Failed to send message.' });
      } else {
        setStatus({ type: 'success', message: data.message });
        setFormData({ name: '', email: '', message: '' }); // Reset form
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Network error, please try again.' });
    }
  };

  return (
    <footer className="bg-green-200 border-t border-gray-200 pt-10 pb-6 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

        {/* Company Info */}
        <div>
          <div className="flex items-center mb-4">
            <svg
              className="h-8 w-8 text-green-600 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19 8h-1V3H6v5H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zM8 5h8v3H8V5zm8 14H8v-4h8v4zm2-4v2H6v-2H4v-4c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v4h-2z" />
              <circle cx="12" cy="11" r="1" />
            </svg>
            <span className="text-green-600 text-xl font-semibold">Health-meet</span>
          </div>
          <p className="text-gray-600 text-sm mb-2">
            Health-meet connects you with professional healthcare—easily and securely. 
            Whether online or in-person, we help you stay well with trusted support.
          </p>
          <p className="text-gray-700 text-sm">
            📞 <strong>Contact:</strong> +250 782 575 191
          </p>
          <p className="text-gray-700 text-sm">
            📧 <strong>Email:</strong> <a href="mailto:davidluxx476@gmail.com" className="text-green-600 hover:underline">info@healthmeet.com</a>
          </p>
        </div>

        {/* Leave a Message Form */}
        <div>
          <h3 className="text-green-600 text-lg font-semibold mb-2">Leave a Message</h3>
          <form className="space-y-3" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-green-600"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-green-600"
            />
            <textarea
              name="message"
              rows="3"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm resize-none focus:outline-none focus:ring-1 focus:ring-green-600"
            ></textarea>
            <button
              type="submit"
              className="bg-green-600 text-white text-sm px-4 py-2 rounded-md hover:bg-green-700 transition"
            >
              Send Message
            </button>
          </form>

          {/* Status message */}
          {status && (
            <p
              className={`mt-3 text-sm ${
                status.type === 'success' ? 'text-green-700' : 'text-red-600'
              }`}
            >
              {status.message}
            </p>
          )}
        </div>

        {/* Additional Content or Quick Links */}
        <div>
          <h3 className="text-green-600 text-lg font-semibold mb-2">Why Choose Health-meet?</h3>
          <ul className="text-gray-700 text-sm space-y-2">
            <li>✓ Trusted doctors and clinics</li>
            <li>✓ Online appointment booking</li>
            <li>✓ Real-time communication</li>
            <li>✓ Secure and confidential services</li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-10 border-t pt-4 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Health-meet. All rights reserved.
      </div>
    </footer>
  );
}
