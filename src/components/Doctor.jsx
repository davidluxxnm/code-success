import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Doctor = () => {
  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate();

  const doctors = [
    {
      id: 1,
      name: "Dr. Amina Diallo",
      specialty: "Pediatrician",
      experience: "12 years",
      education: "MD, University of Lagos",
      languages: ["English", "French", "Swahili"],
      location: "Nairobi, Kenya",
      rating: 4.9,
      reviews: 287,
      about: "Dr. Diallo is a board-certified pediatrician with extensive experience in child healthcare. She specializes in tropical diseases and vaccination programs across East Africa.",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      skills: [
        "Pediatric Care",
        "Vaccination Programs",
        "Tropical Disease Specialist",
        "Neonatal Care",
        "Nutrition Counseling",
        "Emergency Pediatrics"
      ],
      educationDetails: [
        { degree: "MD", institution: "University of Lagos, Nigeria", year: 2008 },
        { degree: "Pediatrics Residency", institution: "Kenyatta National Hospital", year: 2012 },
        { degree: "Tropical Medicine Certification", institution: "African Institute of Health", year: 2015 }
      ]
    },
    {
      id: 2,
      name: "Dr. Kwame Nkrumah",
      specialty: "Cardiologist",
      experience: "15 years",
      education: "MD, University of Ghana",
      languages: ["English", "Twi", "French"],
      location: "Accra, Ghana",
      rating: 4.8,
      reviews: 342,
      about: "Dr. Nkrumah is a renowned cardiologist specializing in interventional cardiology and heart disease prevention in African populations.",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      skills: [
        "Interventional Cardiology",
        "Echocardiography",
        "Heart Disease Prevention",
        "Cardiac Rehabilitation",
        "Hypertension Management",
        "Arrhythmia Treatment"
      ],
      educationDetails: [
        { degree: "MD", institution: "University of Ghana Medical School", year: 2005 },
        { degree: "Cardiology Fellowship", institution: "Korle Bu Teaching Hospital", year: 2010 },
        { degree: "Interventional Cardiology", institution: "South African Heart Institute", year: 2013 }
      ]
    },
    {
      id: 3,
      name: "Dr. Ngozi Okonjo",
      specialty: "Obstetrician/Gynecologist",
      experience: "18 years",
      education: "MD, University of Ibadan",
      languages: ["English", "Igbo", "Yoruba"],
      location: "Lagos, Nigeria",
      rating: 4.9,
      reviews: 412,
      about: "Dr. Okonjo is a leading OB/GYN with expertise in high-risk pregnancies and minimally invasive gynecological surgeries.",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      skills: [
        "High-Risk Pregnancy Care",
        "Minimally Invasive Surgery",
        "Fertility Treatment",
        "Prenatal Care",
        "Gynecologic Oncology",
        "Menopause Management"
      ],
      educationDetails: [
        { degree: "MD", institution: "University of Ibadan", year: 2002 },
        { degree: "OB/GYN Residency", institution: "Lagos University Teaching Hospital", year: 2007 },
        { degree: "Fellowship in Maternal-Fetal Medicine", institution: "Johns Hopkins University", year: 2010 }
      ]
    },
    {
      id: 4,
      name: "Dr. Thabo Mbeki",
      specialty: "Neurologist",
      experience: "14 years",
      education: "MD, University of Cape Town",
      languages: ["English", "Xhosa", "Zulu"],
      location: "Johannesburg, South Africa",
      rating: 4.7,
      reviews: 231,
      about: "Dr. Mbeki specializes in neurodegenerative disorders and has conducted groundbreaking research on African genetic markers in neurological diseases.",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      skills: [
        "Neurodegenerative Disorders",
        "Epilepsy Treatment",
        "Stroke Rehabilitation",
        "Multiple Sclerosis",
        "Neuromuscular Diseases",
        "Headache Management"
      ],
      educationDetails: [
        { degree: "MD", institution: "University of Cape Town", year: 2006 },
        { degree: "Neurology Residency", institution: "Groote Schuur Hospital", year: 2011 },
        { degree: "PhD in Neuroscience", institution: "University of Oxford", year: 2015 }
      ]
    },
    // ... Add any additional doctors if you want
  ];

  const toggleViewAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-12 text-gray-800">Meet Our Specialist Doctors</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {doctors.slice(0, showAll ? doctors.length : 4).map((doctor) => (
          <div key={doctor.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/3">
                <img 
                  src={doctor.image} 
                  alt={doctor.name} 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="w-full md:w-2/3 p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">{doctor.name}</h2>
                    <p className="text-green-600 font-semibold">{doctor.specialty}</p>
                  </div>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                    {doctor.experience} experience
                  </span>
                </div>

                <div className="flex items-center mt-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i} 
                        className={`w-5 h-5 ${i < Math.floor(doctor.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2 text-gray-600 text-sm">
                    {doctor.rating} ({doctor.reviews} reviews)
                  </span>
                </div>

                <p className="mt-3 text-gray-600 text-sm">{doctor.about}</p>

                <div className="mt-4">
                  <h4 className="text-sm font-semibold text-gray-700">Languages:</h4>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {doctor.languages.map((lang, index) => (
                      <span key={index} className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs">
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-4">
                  <h4 className="text-sm font-semibold text-gray-700">Specializations:</h4>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {doctor.skills.slice(0, 4).map((skill, index) => (
                      <span key={index} className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                        {skill}
                      </span>
                    ))}
                    {doctor.skills.length > 4 && (
                      <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs">
                        +{doctor.skills.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                <div className="mt-4">
                  <h4 className="text-sm font-semibold text-gray-700">Education:</h4>
                  <p className="text-gray-600 text-sm mt-1">
                    {doctor.educationDetails[0].degree} from {doctor.educationDetails[0].institution}
                  </p>
                </div>

                <div className="mt-6 flex space-x-3">
                  <button
                    onClick={() => navigate('/bookappointment')}
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition duration-300"
                  >
                    Book Appointment
                  </button>
                  <button className="border border-green-600 text-green-600 hover:bg-green-50 px-4 py-2 rounded-lg text-sm font-medium transition duration-300">
                    View Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <button
          onClick={toggleViewAll}
          className="bg-white border border-green-600 text-green-600 hover:bg-green-50 px-6 py-3 rounded-lg font-medium transition duration-300"
        >
          {showAll ? "View Less Doctors" : "View All Doctors"}
        </button>
      </div>
    </div>
  );
};

export default Doctor;
  