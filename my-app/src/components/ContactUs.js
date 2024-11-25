import React, { useState } from "react";
import "./ContactUs.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    description: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log(formData);
  };

  return (
    <div className="ContactUs">
      <div className="ContactUs-content">
        <h2>Contact Us</h2>
        <p>
          Discover the difference, where expertise meets excellence in real
          estate.<br />
          Let's embark on this exciting journey together.
        </p>
      </div>
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
          <div className="row">
            <div className="input-group">
              <input
                type="text"
                id="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="input-group">
              <input
                type="text"
                id="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="row">
            <div className="input-group">
              <input
                type="email"
                id="email"
                placeholder="E-mail"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="input-group">
              <input
                type="tel"
                id="phone"
                placeholder="Phone no."
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="input-group full-width">
            <textarea
              id="description"
              placeholder="Description"
              rows="4"
              value={formData.description}
              onChange={handleChange}
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
