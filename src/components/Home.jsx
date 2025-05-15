import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const successMessage = location.state?.successMessage;

  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="relative h-[80vh] md:h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-green-900/60 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 animate-zoom-in"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
            animationDuration: '12s'
          }}
        ></div>
        
        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in-up">
            Your Health Journey Begins at <span className="text-green-200">HealthMeet</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-green-100 mb-10 leading-relaxed animate-fade-in-up animate-delay-100">
            Comprehensive care from world-class professionals. Virtual and in-person consultations available.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up animate-delay-200">
            <button 
              onClick={() => navigate('/bookappointment')}
              className="px-8 py-3 bg-green-600 hover:bg-green-500 text-white font-medium rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-green-400/30 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
              </svg>
              Book Appointment
            </button>
            <button 
              onClick={() => navigate('/services')}
              className="px-8 py-3 bg-transparent border-2 border-green-300 text-green-100 hover:bg-green-100 hover:text-green-900 font-medium rounded-lg transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
              Our Services
            </button>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16">Our Healthcare Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                icon: '🩺',
                title: 'Primary Care',
                description: 'Comprehensive health assessments and ongoing care for all ages from our experienced physicians.'
              },
              {
                icon: '💊',
                title: 'Specialty Care',
                description: 'Access to top specialists in cardiology, neurology, orthopedics, and more.'
              },
              {
                icon: '🏥',
                title: 'Urgent Care',
                description: 'Immediate care for non-life-threatening illnesses and injuries with minimal wait times.'
              },
              {
                icon: '🧠',
                title: 'Mental Health',
                description: 'Confidential counseling and psychiatric services for emotional wellbeing.'
              },
              {
                icon: '🦷',
                title: 'Dental Care',
                description: 'Complete oral health services including preventive, restorative, and cosmetic dentistry.'
              },
              {
                icon: '👶',
                title: 'Pediatrics',
                description: 'Specialized care for infants, children, and adolescents with child-friendly facilities.'
              }
            ].map((service, index) => (
              <div 
                key={index}
                className="bg-green-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-green-800 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-20 bg-green-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16">Why Choose HealthMeet</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-8">
                {[
                  {
                    title: "Board-Certified Professionals",
                    description: "All our providers are vetted and certified in their specialties."
                  },
                  {
                    title: "Same-Day Appointments",
                    description: "Urgent care needs addressed quickly with minimal wait times."
                  },
                  {
                    title: "Integrated Care",
                    description: "Seamless coordination between your healthcare providers."
                  },
                  {
                    title: "Patient-Centered Approach",
                    description: "Personalized treatment plans tailored to your unique needs."
                  }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                      <p className="text-gray-600 mt-1">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Doctor with patient"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-green-900/20"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16">Patient Experiences</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Cardiac Patient",
                quote: "The cardiology team saved my life. Their expertise and compassionate care made all the difference during my recovery.",
                rating: 5
              },
              {
                name: "Michael Chen",
                role: "Parent",
                quote: "The pediatricians are wonderful with kids. My daughter actually looks forward to her check-ups!",
                rating: 5
              },
              {
                name: "David Rodriguez",
                role: "Senior Patient",
                quote: "As someone with multiple chronic conditions, I appreciate how all my doctors coordinate my care seamlessly.",
                rating: 4
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-green-50 rounded-xl p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i}
                      xmlns="http://www.w3.org/2000/svg" 
                      className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
                <div>
                  <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-green-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-green-600">
        <div className="container mx-auto px-6 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Take the Next Step in Your Health Journey?</h2>
          <p className="text-lg md:text-xl mb-8">
            Join HealthMeet today and get access to top-tier healthcare professionals. Schedule a consultation or learn more about our services.
          </p>
          <div className="flex justify-center gap-6">
            <button 
              onClick={() => navigate('/bookappointment')}
              className="px-8 py-3 bg-green-700 hover:bg-green-600 text-white font-medium rounded-lg transition-all duration-300 hover:scale-105 shadow-lg">
              Book Appointment
            </button>
            <button 
              onClick={() => navigate('/services')}
              className="px-8 py-3 bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-900 font-medium rounded-lg transition-all duration-300 hover:scale-105"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Success Message */}
      <div>
        {successMessage && (
          <div className="alert alert-success">
            {successMessage}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;