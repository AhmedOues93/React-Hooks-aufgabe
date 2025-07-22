
import './App.css'
import React, { useState } from "react";

function ContactForm() {
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telephone: "",
    message: "",
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();

   
    const { name, email, telephone, message } = formData;
    if (!name || !email || !telephone || !message) {
      alert("Please fill in all fields.");
      return;
    }

   
    console.log("Form Data Submitted:", formData);

   
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label><br />
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Email:</label><br />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Telephone:</label><br />
        <input
          type="tel"
          name="telephone"
          value={formData.telephone}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Message:</label><br />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Send</button>
    </form>
  );
}

export default ContactForm;
