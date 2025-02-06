import React, { useEffect, useState } from 'react';

const ContactPage = () => {
  const [contactInfo, setContactInfo] = useState({ phone: '', instagram: '' });

  useEffect(() => {
    fetch('/api/contact')
      .then(response => response.json())
      .then(data => setContactInfo(data));
  }, []);

  return (
    <div>
      <h1>Контакты</h1>
      <p>Телефон: {contactInfo.phone}</p>
      <p>Instagram: <a href={contactInfo.instagram}>Наш Instagram</a></p>
    </div>
  );
};

export default ContactPage;