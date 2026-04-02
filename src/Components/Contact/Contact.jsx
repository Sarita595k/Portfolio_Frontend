import React, { useState } from 'react';
import './Contact.css';
import { FaPaperPlane, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                alert("Message received! Your details are now in the database.");
                setFormData({ name: '', email: '', subject: '', message: '' });
            }
        } catch (error) {
            console.error("Database connection error:", error);
        }
    };

    return (
        <section id="contact-section">
            {/* Background Video Layer */}
            <div className="video-bg-container">
                <video autoPlay loop muted playsInline className="bg-video">
                    <source src="https://visiblo-theme.tavonline.co/version-4/wp-content/uploads/sites/5/2026/03/world.mp4" type="video/mp4" />
                </video>
                <div className="video-overlay"></div>
            </div>

            {/* Content Layer */}
            <div className="luique-contact-card">
                <div className="contact-grid">

                    {/* Left Side: Info */}
                    <div className="contact-details-side">
                        <span className="subtitle">Contact Me</span>
                        <h2>Let’s Talk About <br /> <span className="highlight">the Next Project</span></h2>

                        <div className="info-list">
                            <div className="info-item">
                                <div className="icon-box"><FaPhoneAlt /></div>
                                <div><p>Phone</p><strong>+91 7303473668</strong></div>
                            </div>
                            <div className="info-item">
                                <div className="icon-box"><FaEnvelope /></div>
                                <div><p>Email</p><strong>sarita595k@gmail.com</strong></div>
                            </div>
                            <div className="info-item">
                                <div className="icon-box"><FaMapMarkerAlt /></div>
                                <div><p>Location</p><strong>Bangalore, Karnataka</strong></div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Form */}
                    <div className="contact-form-side">
                        <form onSubmit={handleSubmit}>
                            <div className="form-row">
                                <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
                                <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
                            </div>
                            <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} />
                            <textarea name="message" placeholder="Message" rows="5" value={formData.message} onChange={handleChange} required></textarea>

                            <button type="submit" className="luique-btn">
                                Send Message <FaPaperPlane />
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;