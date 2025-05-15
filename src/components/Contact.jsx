import React, { useState } from 'react';
import {
  FaInstagram,
  FaFacebook,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaClock,
} from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullname: '',       // unified with second version's 'name'
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState(null);
  const [formError, setFormError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormSuccess(null);
    setFormError(null);

    try {
      const response = await fetch('http://localhost:12345/contact/message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Something went wrong');
      }

      const data = await response.json();
      setFormSuccess(data.message || 'Message sent successfully!');
      setFormError(null);
      setFormData({ name: '', email: '', subject: '', message: '' });
      // You can optionally redirect after some delay or let user decide
      // window.location.href = '/contact';

    } catch (error) {
      setFormError('Error: ' + error.message);
      setFormSuccess(null);
      // window.location.href = '/contact';
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions or want to work together? We'd love to hear from you!
          </p>
        </div>

        {/* Contact Form and Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Send Us a Message
            </h3>

            {formSuccess && (
              <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-md">
                {formSuccess}
              </div>
            )}
            {formError && (
              <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-md">
                {formError}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-700 mb-2"
                  >
                    Full Name*
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-700 mb-2"
                  >
                    Email Address*
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="subject"
                  className="block text-gray-700 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div className="mb-8">
                <label
                  htmlFor="message"
                  className="block text-gray-700 mb-2"
                >
                  Your Message*
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className={`w-full py-4 text-white font-medium rounded-lg transition duration-300 ${
                  isSubmitting
                    ? 'bg-gray-500 cursor-not-allowed'
                    : 'bg-green-600 hover:bg-green-700'
                }`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Processing...
                  </span>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <FaMapMarkerAlt className="text-green-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-800">
                      Our Location
                    </h4>
                    <p className="text-gray-600">KG 123 St, Kigali Heights</p>
                    <p className="text-gray-600">Kigali, Rwanda</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <FaEnvelope className="text-green-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-800">
                      Email Address
                    </h4>
                    <p className="text-gray-600">davidluxxnm@gmail.com</p>
                    <p className="text-gray-600">david.luxx.it.250@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <FaPhone className="text-green-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-800">
                      Phone Numbers
                    </h4>
                    <p className="text-gray-600">+250 782575191(Office)</p>
                    <p className="text-gray-600">+250 7351964496(Mobile)</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <FaClock className="text-green-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-800">
                      Working Hours
                    </h4>
                    <p className="text-gray-600">Mon - Fri: 8 AM - 6 PM</p>
                    <p className="text-gray-600">Sat - Sun: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Frequently Asked Questions
              </h3>

              <div className="space-y-4 text-gray-700">
                <details className="p-4 border border-gray-300 rounded-lg">
                  <summary className="cursor-pointer font-semibold">
                    What is your customer support availability? 
















                    
                  </summary>
                  <p className="mt-2">
                    Our customer support is available Monday to Friday from 9 AM to
                    5 PM.
                  </p>
                </details>

                <details className="p-4 border border-gray-300 rounded-lg">
                  <summary className="cursor-pointer font-semibold">
                    How long does delivery take?
                  </summary>
                  <p className="mt-2">
                    Delivery typically takes between 3-5 business days depending on your
                    location.
                  </p>
                </details>

                <details className="p-4 border border-gray-300 rounded-lg">
                  <summary className="cursor-pointer font-semibold">
                    Can I change my order after placing it?
                  </summary>
                  <p className="mt-2">
                    Yes, you can change your order within 24 hours of placing it by
                    contacting support.
                  </p>
                </details>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="rounded-lg overflow-hidden shadow-lg mb-8">
              <iframe
                title="Google Map"
                src="https://maps.google.com/maps?q=Kigali%20Heights&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="300"
          
                className="w-full h-72"
              ></iframe>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-green-600 rounded-lg p-6 text-white text-center mb-8">
              <h3 className="text-2xl font-semibold mb-4">
                Join Our Newsletter
              </h3>
              <p className="mb-4 max-w-md mx-auto">
                Stay updated with our latest news and offers. No spam, we promise!
              </p>
              <form
                className="flex max-w-md mx-auto"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="flex-grow px-4 py-3 rounded-l-lg text-gray-800 focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-white text-green-600 px-6 rounded-r-lg font-semibold hover:bg-green-100 transition"
                >
                  Subscribe
                </button>
              </form>
            </div>

            {/* Social Media Links */}
            <div className="flex justify-center space-x-6 text-gray-600 text-3xl">
              <a
                href="https://www.instagram.com/david_luxx_nm/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-600 transition"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.facebook.com/david.luxx.nm/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-600 transition"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
