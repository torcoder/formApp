import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useForm } from 'react-hook-form';

const Home = (props) => {
  const navigate = useNavigate();
  const [phone, setPhone] = useState();
  const [phoneIsValid, setPhoneIsValid] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (phoneIsValid) {
      const payload = {
        fullName: data.fullName,
        emailAddress: data.emailAddress,
        phoneNumber: phone,
      };
      const map = JSON.stringify(payload);
      localStorage.setItem('formData', map);
      navigate('/thanks');
    }
  };

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const utmSource = query.get('utm_source');
    const utmMedium = query.get('utm_medium');
    const utmTerm = query.get('utm_term');

    // Save the UTM values to local storage
    localStorage.setItem('utm_source', utmSource);
    localStorage.setItem('utm_medium', utmMedium);
    localStorage.setItem('utm_term', utmTerm);
  }, []);

  return (
    <div className="home-page">
      <h1>Welcome to My Form App</h1>
      <p>Please enter your information in the form below</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-group">
          <label htmlFor="">FullName</label>
          <input
            className="form-control-input"
            type="text"
            name="fullName"
            {...register('fullName', { required: true })}
          />
          {errors.fullName?.type === 'required' && (
            <p role="alert">FullName is required</p>
          )}
        </div>
        <div className="input-group">
          <label htmlFor="">Email Address</label>
          <input
            className="form-control-input"
            type="email"
            {...register('emailAddress', {
              required: true,
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: 'Entered value does not match email format',
              },
            })}
            name="emailAddress"
          />
          {errors.mail && <p role="alert">{errors.mail?.message}</p>}
        </div>
        <div className="input-group">
          <label htmlFor="">Phone Number</label>
          <PhoneInput
            country={'tr'}
            value={phone}
            onChange={(phone) => setPhone(phone)}
            inputProps={{
              name: 'phone',
              required: true,
            }}
            isValid={(value, country) => {
              if (value.match(/12345/) || value.match(/5555555555/)) {
                return 'Invalid value: ' + value + ', ' + country.name;
              } else if (value.length < 12) {
                return false;
              } else if (!value.startsWith('5', 2)) {
                return false;
              } else {
                setPhoneIsValid(true);
                return true;
              }
            }}
          />
        </div>
        <button type="submit">Gönder</button>
      </form>
    </div>
  );
};

export default Home;
