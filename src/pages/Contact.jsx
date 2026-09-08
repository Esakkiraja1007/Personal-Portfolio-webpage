import { useState } from 'react';
import '../style/Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill out all required fields.');
      return;
    }

    setIsSubmitted(true);

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });

    setTimeout(() => {
      setIsSubmitted(false);
    }, 4000);
  };

  const contactInfo = [
    {
      id: 1,
      icon: '📧',
      title: 'Email',
      value: 'rajaesakki288@gmail.com',
      href: 'mailto:rajaesakki288@gmail.com',
    },
    {
      id: 2,
      icon: '💼',
      title: 'Phone Number',
      value: '9360210804',
      href: null,
      
    },
    {
      id: 3,
     
      icon: '📍',
      title: 'Location',
      value: 'Tirunelveli, Tamil Nadu, India',
      href: null,
    },
  ];

  return (
    <section className="contact-container" id="contact">
      {/* Header */}
      <div className="contact-header">
        <span className="contact-badge">Get In Touch</span>
        <h2 className="contact-title">
          Contact <span className="contact-gradient">Me</span>
        </h2>
        <div className="contact-line"></div>
      </div>

      <div className="contact-layout">
        {/* Left Side: Contact Details */}
        <div className="contact-info-panel">
          <h3 className="info-heading">Let's Connect &amp; Collaborate</h3>
          <p className="info-desc">
            I am currently open to entry-level Frontend Developer and React Developer roles.
            Whether you have an opportunity or want to discuss a project, feel free to send a message!
          </p>

          <div className="info-cards-list">
            {contactInfo.map((item) => (
              <div key={item.id} className="info-card">
                <span className="info-icon">{item.icon}</span>
                <div className="info-details">
                  <h4 className="info-title">{item.title}</h4>
                  {item.href ? (
                    <a href={item.href} className="info-link" target="_blank" rel="noreferrer">
                      {item.value}
                    </a>
                  ) : (
                    <span className="info-text">{item.value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Controlled Form */}
        <div className="contact-form-panel">
          {isSubmitted && (
            <div className="success-alert">
              ✅ Thank you! Your message has been sent successfully.
            </div>
          )}

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Your Name <span className="required">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-input"
                placeholder="Enter your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Your Email <span className="required">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject" className="form-label">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="form-input"
                placeholder="Job Opportunity / Project Inquiry"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Message <span className="required">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                className="form-textarea"
                rows="5"
                placeholder="Write your message here..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Send Message &rarr;
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}