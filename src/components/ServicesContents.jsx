import React from 'react';
import { useNavigate } from 'react-router-dom';

const ServiceContents = () => {
  const navigate = useNavigate();
  
  const handleBookAppointment = () => {
    navigate('/bookappointment');
  };

  const handleLearnMore = (serviceTitle) => {
    // You can implement specific navigation or modal for each service
    console.log(`Learn more about ${serviceTitle}`);
  };

  const services = [
    {
      title: "Primary Care",
      description: "Comprehensive health assessments and ongoing care for all ages from our experienced physicians.",
      features: ["Annual physicals", "Chronic disease management", "Preventive care", "Vaccinations", "Health screenings"],
      icon: "https://img.icons8.com/ios-filled/50/000000/doctor-male.png",
      details: "Our primary care physicians serve as your first point of contact for all health concerns, coordinating your overall healthcare needs and providing continuous, comprehensive care.",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Cardiology",
      description: "Specialized care for your heart health with advanced diagnostic tools and treatment options.",
      features: ["Echocardiograms", "Stress tests", "Holter monitoring", "Cardiac rehabilitation", "Hypertension management"],
      icon: "https://img.icons8.com/ios-filled/50/000000/heart-health.png",
      details: "Our cardiology team provides expert care for heart conditions using state-of-the-art technology and personalized treatment plans to optimize your cardiovascular health.",
      image: "https://images.unsplash.com/photo-1551601651-bc60f254d532?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
   
    {
      title: "Women's Health",
      description: "Comprehensive care tailored to women's unique health needs at every stage of life.",
      features: ["Annual exams", "Prenatal care", "Menopause management", "Family planning", "Breast health"],
       icon: "https://img.icons8.com/ios-filled/50/000000/heart-health.png",
    details: "Our women's health specialists provide compassionate, personalized care focusing on reproductive health, pregnancy, and gender-specific conditions in a comfortable setting.",
      image: "https://images.unsplash.com/photo-1573497491765-dccce02b29df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Orthopedics",
      description: "Expert care for musculoskeletal conditions, injuries, and joint replacement.",
      features: ["Fracture care", "Arthritis treatment", "Sports medicine", "Joint injections", "Physical therapy"],
      icon: "https://img.icons8.com/ios-filled/50/000000/knee-joint.png",
      details: "Our orthopedic specialists diagnose and treat conditions affecting bones, joints, ligaments, tendons, muscles, and nerves using both surgical and non-surgical approaches.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Mental Health",
      description: "Compassionate psychiatric care and counseling services for emotional wellbeing.",
      features: ["Depression/anxiety treatment", "Psychotherapy", "Medication management", "Stress reduction", "Behavioral therapy"],
      icon: "https://img.icons8.com/ios-filled/50/000000/mental-health.png",
      details: "Our mental health professionals provide evidence-based treatments for emotional, behavioral, and psychological concerns in a supportive, confidential environment.",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
      {
      title: "Primary Care",
      description: "Comprehensive health assessments and ongoing care for all ages from our experienced physicians.",
      features: ["Annual physicals", "Chronic disease management", "Preventive care", "Vaccinations", "Health screenings"],
      icon: "https://img.icons8.com/ios-filled/50/000000/doctor-male.png",
      details: "Our primary care physicians serve as your first point of contact for all health concerns, coordinating your overall healthcare needs and providing continuous, comprehensive care.",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
  ];

  const doctors = [
    {
      name: "Dr. Sarah Johnson",
      specialty: "Family Medicine",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      availability: "Available Monday-Friday",
      education: "MD, Harvard Medical School",
      experience: "15 years experience",
      bio: "Specializes in preventive care and chronic disease management with a patient-centered approach."
    },
    {
      name: "Dr. Michael Chen",
      specialty: "Cardiology",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      availability: "Available Tuesday-Thursday",
      education: "MD, Johns Hopkins University",
      experience: "12 years experience",
      bio: "Expert in interventional cardiology with research published in leading medical journals."
    },
    {
      name: "Dr. Emily Rodriguez",
      specialty: "Pediatrics",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      availability: "Available Monday-Wednesday-Friday",
      education: "MD, Stanford University",
      experience: "8 years experience",
      bio: "Passionate about child development and creating positive healthcare experiences for young patients."
    }
  ];

  const testimonials = [
    {
      quote: "The care I received was exceptional. The doctors took time to listen to my concerns and explained everything clearly.",
      author: "Maria Gonzalez",
      role: "Patient since 2018",
      image: "https://randomuser.me/api/portraits/women/65.jpg"
    },
    {
      quote: "After struggling to find the right specialist, I finally got the proper diagnosis and treatment here. Life-changing!",
      author: "David Kim",
      role: "Patient since 2020",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      quote: "The pediatric team made my children feel comfortable during every visit. We wouldn't go anywhere else.",
      author: "Sarah Johnson",
      role: "Parent of two patients",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    }
  ];

  const stats = [
    { value: "98%", label: "Patient Satisfaction Rate" },
    { value: "25+", label: "Years of Combined Experience" },
    { value: "10+", label: "Specialty Departments" },
    { value: "24/7", label: "Urgent Care Availability" }
  ];

  const insuranceProviders = [
    "Aetna", "Blue Cross Blue Shield", "Cigna", "UnitedHealthcare", 
    "Medicare", "Medicaid", "Humana", "Kaiser Permanente"
  ];

  const appointmentSteps = [
    {
      title: "Book Online",
      description: "Schedule your appointment through our secure portal",
      icon: "📅"
    },
    {
      title: "Get Confirmation",
      description: "Receive appointment details via email or text",
      icon: "✅"
    },
    {
      title: "Complete Forms",
      description: "Fill out paperwork online before your visit",
      icon: "📝"
    },
    {
      title: "Visit Us",
      description: "Arrive 15 minutes early for your appointment",
      icon: "🏥"
    }
  ];

  return (
    <div className="min-h-screen bg-green-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section with Appointment Image */}
        <div className="relative text-center p-10 mb-16 bg-gradient-to-r from-green-500 to-green-700 rounded-xl text-white overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <img 
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
            alt="Doctor with patient" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-10">
            <h1 className="text-4xl font-bold mb-4">Get Expert Care, Anytime</h1>
            <p className="text-lg mb-8">Book an appointment with top-rated doctors in your area. Whether it's for primary care or specialized services, we're here for you.</p>
            <button 
              onClick={handleBookAppointment} 
              className="px-6 py-3 text-lg font-semibold bg-green-700 rounded-full text-white shadow-lg hover:bg-green-600"
            >
              Book Appointment Now
            </button>
          </div>
        </div>

        {/* Services Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {services.map(service => (
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={service.image} alt={service.title} className="w-full h-56 object-cover"/>
              <div className="p-6">
                <div className="flex items-center space-x-4">
                  <img src={service.icon} alt={service.title} className="w-12 h-12 text-green-500"/>
                  <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
                </div>
                <p className="mt-4 text-gray-600">{service.description}</p>
                <ul className="mt-2 space-y-1 text-gray-600">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <span>✔</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={() => handleLearnMore(service.title)} 
                  className="mt-4 text-green-500 hover:text-green-700"
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Doctors Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-gray-800 text-center">Meet Our Doctors</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-8">
            {doctors.map((doctor, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src={doctor.image} alt={doctor.name} className="w-full h-56 object-cover"/>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800">{doctor.name}</h3>
                  <p className="mt-2 text-gray-600">{doctor.specialty}</p>
                  <p className="mt-2 text-gray-500">{doctor.education}</p>
                  <p className="mt-2 text-gray-500">{doctor.experience}</p>
                  <p className="mt-4 text-gray-600">{doctor.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold text-gray-800">Why Choose Us?</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-12 mt-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <h3 className="text-3xl font-bold text-green-700">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-gray-800 text-center">What Our Patients Say</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden p-6">
                <img src={testimonial.image} alt={testimonial.author} className="w-16 h-16 rounded-full mx-auto"/>
                <p className="mt-4 text-gray-600">"{testimonial.quote}"</p>
                <p className="mt-2 font-semibold text-gray-800">{testimonial.author}</p>
                <p className="text-gray-500">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Insurance Providers Section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold text-gray-800">Accepted Insurance Providers</h2>
          <div className="mt-8 flex justify-center flex-wrap gap-6">
            {insuranceProviders.map((provider, index) => (
              <div key={index} className="bg-white p-4 shadow-md rounded-lg">{provider}</div>
            ))}
          </div>
        </div>

        {/* Appointment Steps Section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold text-gray-800">How to Book an Appointment</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mt-8">
            {appointmentSteps.map((step, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <div className="text-3xl">{step.icon}</div>
                <h3 className="mt-4 text-xl font-semibold text-gray-800">{step.title}</h3>
                <p className="mt-2 text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceContents;
