import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const AppointmentDetails = () => {
  const { id } = useParams();
  const [appointment, setAppointment] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAppointmentDetails = async () => {
      try {
        const response = await axios.get(`/api/appointments/${id}`);
        setAppointment(response.data);
        setLoading(false);
      } catch (err) {
        setError('Error fetching appointment details.');
        setLoading(false);
      }
    };

    fetchAppointmentDetails();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Appointment Details</h1>
      <div>
        <p>Patient Name: {appointment.patientName}</p>
        <p>Date: {new Date(appointment.date).toLocaleString()}</p>
        <p>Status: {appointment.status}</p>
      </div>
    </div>
  );
};

export default AppointmentDetails;
