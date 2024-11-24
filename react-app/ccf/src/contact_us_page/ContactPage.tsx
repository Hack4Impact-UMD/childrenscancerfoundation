import React, { useState } from 'react';
import Phone from '../assets/call.png';
import Email from '../assets/mail.png';
import './ContactPage.css';
import logo from '../assets/ccf-logo.png';

interface ContactPage {
  email: string;
  phone: string;
  hours: string;
}

const ContactPage: React.FC<ContactPage> = ({ email, phone, hours }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="contact-container">
      <div className={`contact-sidebar ${isCollapsed ? 'collapsed' : ''}`}>
        <div 
          className="collapse-arrow" 
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed ? '>>>' : '<<<'}
        </div>
        <nav className="sidebar-nav">
          {['Home', 'Account Settings', 'Applications', 'FAQ', 'Contact'].map((item) => (
            <button
              key={item}
              className={`nav-item ${item === 'FAQ' ? 'active' : ''}`}
            >
              {item}
            </button>
          ))}
        </nav>
      </div>

      <div className="content-area">
        <div className="contact-header">
          <img src={logo} alt="Logo" className="contact-logo" />
          <h1 className="contact-title">Contact our team.</h1>
          <p className="contact-subtitle">Let us know how we can help.</p>
        </div>

        <div className="contact-box">
          <div className="contact-method">
            <div className="contact-method-header">
              <img src={Email} alt="Email Icon" className="contact-icon" />
              <h2 className="contact-method-title">Email Support</h2>
            </div>
            <p className="contact-text">Email us and we'll get back to you as soon as possible.</p>
            <a href={`mailto:${email}`} className="contact-link">
              {email}
            </a>
          </div>

          <div className="contact-method">
            <div className="contact-method-header">
              <img src={Phone} alt="Phone Icon" className="contact-icon" />
              <h2 className="contact-method-title">Call Support</h2>
            </div>
            <p className="contact-text">Call us and we'll get back to you as soon as possible.</p>
            <a href={`tel:${phone}`} className="contact-link">
              {phone}
            </a>
            <p className="contact-hours">{hours}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;