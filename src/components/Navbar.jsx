import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faStethoscope, faPhone, faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg fixed top-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <svg className="h-8 w-8 text-green-600 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 8h-1V3H6v5H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zM8 5h8v3H8V5zm8 14H8v-4h8v4zm2-4v2H6v-2H4v-4c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v4h-2z" />
              <circle cx="12" cy="11" r="1" />
            </svg>
            <span className="text-2xl font-bold text-green-600">Health-meet</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" onClick={() => handleNavigation('/')} className="text-gray-700 hover:text-green-600 flex items-center">
              <FontAwesomeIcon icon={faHome} className="mr-2" />
              Home
            </a>
            <a href="/services" onClick={() => handleNavigation('/services')} className="text-gray-700 hover:text-green-600 flex items-center">
              <FontAwesomeIcon icon={faStethoscope} className="mr-2" />
              Services
            </a>
            <a href="/doctors" onClick={() => handleNavigation('/doctors')} className="text-gray-700 hover:text-green-600 flex items-center">
              <FontAwesomeIcon icon={faUser} className="mr-2" />
              Doctors
            </a>
            <a href="/contact" onClick={() => handleNavigation('/contact')} className="text-gray-700 hover:text-green-600 flex items-center">
              <FontAwesomeIcon icon={faPhone} className="mr-2" />
              Contact
            </a>
            <div className="flex items-center space-x-4">
              <button onClick={() => handleNavigation('/login')} className="px-4 py-2 text-gray-700 hover:text-green-600 border border-gray-300 rounded-md hover:border-green-600">
                Login
              </button>
              <button onClick={() => handleNavigation('/signup')} className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
                Sign Up
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 rounded-md text-gray-700 hover:text-green-600">
              <svg className={`h-6 w-6 ${mobileMenuOpen ? 'hidden' : 'block'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg className={`h-6 w-6 ${mobileMenuOpen ? 'block' : 'hidden'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-50">
          <a href="/" onClick={() => handleNavigation('/')} className="block px-3 py-2 text-gray-700 hover:text-green-600 flex items-center">
            <FontAwesomeIcon icon={faHome} className="mr-2" />
            Home
          </a>
          <a href="/services" onClick={() => handleNavigation('/services')} className="block px-3 py-2 text-gray-700 hover:text-green-600 flex items-center">
            <FontAwesomeIcon icon={faStethoscope} className="mr-2" />
            Services
          </a>
          <a href="/doctors" onClick={() => handleNavigation('/doctors')} className="block px-3 py-2 text-gray-700 hover:text-green-600 flex items-center">
            <FontAwesomeIcon icon={faUser} className="mr-2" />
            Doctors
          </a>
          <a href="/contact" onClick={() => handleNavigation('/contact')} className="block px-3 py-2 text-gray-700 hover:text-green-600 flex items-center">
            <FontAwesomeIcon icon={faPhone} className="mr-2" />
            Contact
          </a>
          <a href="/login" onClick={() => handleNavigation('/login')} className="block px-3 py-2 text-gray-700 hover:text-green-600 flex items-center">
            <FontAwesomeIcon icon={faUser} className="mr-2" />
            Login
          </a>
          <a href="/signup" onClick={() => handleNavigation('/signup')} className="block px-3 py-2 text-white bg-green-600 hover:bg-green-700 flex items-center">
            <FontAwesomeIcon icon={faUserPlus} className="mr-2" />
            Sign Up
          </a>
        </div>
      )}
    </nav>
  );
}
