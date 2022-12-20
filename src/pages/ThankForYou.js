import React, { useState } from 'react';
const data = localStorage.getItem('formData');
export const ThankForYou = () => {
  const [formData, setFormData] = useState(JSON.parse(data));

  const utmSource = localStorage.getItem('utm_source');
  const utmMedium = localStorage.getItem('utm_medium');
  const utmTerm = localStorage.getItem('utm_term');

  return (
    <div className="thanks-page">
      <h1>Thank you for your submission!</h1>
      <div className="utm-details">
        <p>Your UTM information:</p>
        <ul>
          <li>UTM Source: {utmSource}</li>
          <li>UTM Medium: {utmMedium}</li>
          <li>UTM Term: {utmTerm}</li>
        </ul>
        <p>Your form information:</p>
        <ul>
          <li>Full Name: {formData.fullName}</li>
          <li>Email: {formData.emailAddress}</li>
          <li>Phone: +{formData.phoneNumber}</li>
        </ul>
      </div>
    </div>
  );
};
