import React from 'react';
import aboutImage from '../assets/about.jpg';

const AboutPage = () => {
  return (
    <div>
      <h1>О нас</h1>
      <img src={aboutImage} alt="О нас" />
      <p>Мы команда профессионалов, предоставляющих медицинские услуги высшего качества...</p>
    </div>
  );
};

export default AboutPage;