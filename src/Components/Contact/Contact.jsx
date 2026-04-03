import React, { useState } from 'react';
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
                alert("Message received!");
                setFormData({ name: '', email: '', subject: '', message: '' });
            }
        } catch (error) {
            console.error("Database connection error:", error);
        }
    };

    return (
        <section id="contact-section" className="relative w-full min-h-screen flex justify-center items-center overflow-hidden py-20 px-6 bg-black">

            {/* --- Video Background Layer --- */}
            <div className="absolute inset-0 z-0 w-full h-full">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-60" /* Adjust opacity here to see more/less video */
                >
                    <source src="https://visiblo-theme.tavonline.co/version-4/wp-content/uploads/sites/5/2026/03/world.mp4" type="video/mp4" />
                </video>
                {/* Dark Tint Overlay - Reduced opacity to 40% so video is visible */}
                <div className="absolute inset-0 bg-black/40 z-10"></div>
            </div>

            {/* --- Content Card --- */}
            <div className="relative z-20 max-w-6xl w-full bg-white/10 backdrop-blur-xl p-8 md:p-16 rounded-[40px] border border-white/10 shadow-2xl">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Left Side: Info */}
                    <div className="flex flex-col justify-center">
                        <span className="text-brand uppercase tracking-widest font-bold text-sm mb-4">
                            Contact Me
                        </span>
                        <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-10 capitalize">
                            Let’s Talk About <br />
                            <span className="text-brand capitalize">the Next Project</span>
                        </h2>

                        <div className="space-y-8">
                            <div className="flex items-center gap-6 group">
                                <div className="w-14 h-14 bg-brand/20 text-brand rounded-2xl flex justify-center items-center text-2xl group-hover:scale-110 transition-transform">
                                    <FaPhoneAlt />
                                </div>
                                <div>
                                    <p className="text-slate-400 text-sm">Phone</p>
                                    <strong className="text-white text-xl">+91 7303473668</strong>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 group">
                                <div className="w-14 h-14 bg-brand/20 text-brand rounded-2xl flex justify-center items-center text-2xl group-hover:scale-110 transition-transform">
                                    <FaEnvelope />
                                </div>
                                <div>
                                    <p className="text-slate-400 text-sm">Email</p>
                                    <strong className="text-white text-xl">sarita595k@gmail.com</strong>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 group">
                                <div className="w-14 h-14 bg-brand/20 text-brand rounded-2xl flex justify-center items-center text-2xl group-hover:scale-110 transition-transform">
                                    <FaMapMarkerAlt />
                                </div>
                                <div>
                                    <p className="text-slate-400 text-sm">Location</p>
                                    <strong className="text-white text-xl">Bangalore, Karnataka</strong>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Form */}
                    <form onSubmit={handleSubmit} className="flex flex-col gap-6 self-center">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input
                                type="text" name="name" placeholder="Full Name"
                                value={formData.name} onChange={handleChange} required
                                className="bg-white/5 border border-white/10 p-5 rounded-2xl text-white outline-none focus:border-brand focus:bg-white/10 transition-all"
                            />
                            <input
                                type="email" name="email" placeholder="Email Address"
                                value={formData.email} onChange={handleChange} required
                                className="bg-white/5 border border-white/10 p-5 rounded-2xl text-white outline-none focus:border-brand focus:bg-white/10 transition-all"
                            />
                        </div>
                        <input
                            type="text" name="subject" placeholder="Subject"
                            value={formData.subject} onChange={handleChange}
                            className="bg-white/5 border border-white/10 p-5 rounded-2xl text-white outline-none focus:border-brand focus:bg-white/10 transition-all"
                        />
                        <textarea
                            name="message" placeholder="Message" rows="5"
                            value={formData.message} onChange={handleChange} required
                            className="bg-white/5 border border-white/10 p-5 rounded-2xl text-white outline-none focus:border-brand focus:bg-white/10 transition-all resize-none"
                        ></textarea>

                        <button
                            type="submit"
                            className="bg-brand hover:bg-[#2a4d50] text-white py-5 rounded-2xl font-bold text-lg flex justify-center items-center gap-3 transition-all transform hover:-translate-y-1 shadow-lg shadow-brand/20"
                        >
                            Send Message <FaPaperPlane />
                        </button>
                    </form>

                </div>
            </div>
        </section>
    );
};

export default Contact;