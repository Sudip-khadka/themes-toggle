import React, { useState, useEffect,useContext } from 'react';
import '../Styles/ContactUs.css';
import Image2 from '../assets/image2.png';
import { MdOutlineMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { ThemeContext } from './Context/ThemeContext';

function ContactUs() {
    const { isDarkMode } = useContext(ThemeContext);
  const [success, setSuccess] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [phone, setPhone] = useState("");
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    description: ''
  });

  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => {
        setShowAlert(false);
      }, 3000); // 4 seconds

      // Clean up the timer when component unmounts or when showAlert changes
      return () => clearTimeout(timer);
    }
  }, [showAlert]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, description } = formData;

    if (name && email && phone && description) {
      setSuccess(true);
    } else {
      setSuccess(false);
    }
    setShowAlert(true); // Show alert after form submission
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    const regex = /^[0-9\b]+$/; // Allow only numbers and backspace
    if (value === '' || regex.test(value)) {
      setFormData({ ...formData, phone: value });
    }
  };

  return (
    <div className={`contactus ${isDarkMode ? 'dark': 'light'}`}>
      <div className={`input-field ${isDarkMode ? 'dark': 'light'}`}>
        <div className="alerts">
          <Stack sx={{ width: '100%' }} spacing={2}>
            {showAlert && (
              success ? (
                <Alert
                  variant="outlined"
                  severity="success"
                  onClose={() => setShowAlert(false)}
                >
                  Form Completely Submitted.
                </Alert>
              ) : (
                <Alert
                  variant="outlined"
                  severity="error"
                  onClose={() => setShowAlert(false)}
                >
                  Please Leave a message.
                </Alert>
              )
            )}
          </Stack>
        </div>
        <p>Get In Touch</p>
        <p className='p-text'>Ready To Work Together? <span className='colored'>Build a project with us!</span></p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name"><b>Name & Company <span className='colored'>*</span></b></label>
          <input type="text" id='name' placeholder='Enter Your Name' required value={formData.name} onChange={handleInputChange} />
          <label htmlFor="email"><b>Email <span className='colored'>*</span></b></label>
          <input type="email" id='email' placeholder='Enter Your Email Address' required value={formData.email} onChange={handleInputChange} />
          <label htmlFor="phone"><b>Phone No. <span className='colored'>*</span></b></label>
          <input type="tel" id='phone' placeholder='Enter Your Phone Number' required value={formData.phone} onChange={handlePhoneChange} />
          <label htmlFor="description"><b>Project Description </b><span className='colored'>*</span></label>
          <textarea id='description' placeholder='Enter Your Message'  value={formData.description} onChange={handleInputChange}></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="right-alignment">
        <div className={`image ${isDarkMode ? 'dark': 'light'}`}>
          <img src={Image2} alt="Contact Us"/>
        </div>
        <div className={`contact ${isDarkMode ? 'dark': 'light'}`}>
          <div className="contact-card">
            <div className="icon">
              <MdOutlineMail/>
            </div>
            <div className="data">
              <h3>Email</h3>
              <p>ksudip0123@gmail.com</p>
            </div>
          </div>
          <div className="contact-card">
            <div className="icon">
              <FaPhoneAlt/>
            </div>
            <div className="data">
              <h3>Phone</h3>
              <p>9818457***</p>
            </div>
          </div>
          <div className="contact-card">
            <div className="icon">
              <IoLocation/>
            </div>
            <div className="data">
              <h3>Address</h3>
              <p>Joshi Chowk, Judibutti</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
