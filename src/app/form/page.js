// src\app\form\page.js
"use client";
import Header from '../../components/Header';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import React, { useState } from 'react';
import 
{ 
  databases, 
  Permission, 
  Role 
}
 from '../../../appwrite';

const Form = ({ onNewEntry }) => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};
    if (!formData.name) errors.name = 'Name is required';
    if (!formData.mobile) errors.mobile = 'Mobile is required';
    if (!formData.mobile || !/^\d{10}$/.test(formData.mobile)) errors.mobile = 'Mobile number must be 10 digits';
    if (!formData.email) errors.email = 'Email is required';
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});

    try {
      const response = await databases.createDocument(
        '66863b32738c1d0f10e8', // Replace with your database ID
        '66863b434c3dfd80630b', // Replace with your collection ID
        'unique()', // Auto-generate a unique ID
        formData,
        [Permission.write(Role.any())], // Only Permission.write(Role.any())
        { headers: { 'X-Appwrite-Key': '6a7dfa185eff488e758823d9378fac39fd9848ae5556ffd58e5266c574705625a17b2a67d2df6814784665edc8c70d7a5622614875b76fc0b67f0e833fe10c1be7fd988c7ce733218929913b9edee79640b00ea6da3686bd91f2e8fbc406720b6d3081ec4d4f27ca096b27dcf59dc5e4ed792fb28b119db561d89f0c89de70da' } }
      );
      console.log(response);
      alert('Data Submit Successfully.');
      // Reset form data after successful submission
      setFormData({
        name: '',
        mobile: '',
        email: '',
      });
    } catch (error) {
      console.error('Failed to create document', error);
    }
  };

  return (
    <div>
      <Header />
      <NavBar />
      <div>
        <h1>Form</h1>
      </div>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} />
            {errors.name && <span>{errors.name}</span>}
          </div>
          <div className="form-group">
            <label>Mobile</label>
            <input type="number" className="form-control" name="mobile" value={formData.mobile} onChange={handleChange} />
            {errors.mobile && <span>{errors.mobile}</span>}
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} />
            {errors.email && <span>{errors.email}</span>}
          </div>
          <hr />
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button type="submit" className="btn btn-info">Submit</button>
            </div>
          </div>
        </form>
      </div>
      <br />

      <Footer />
    </div>
  );
};

export default Form;