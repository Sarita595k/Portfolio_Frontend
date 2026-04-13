import React, { useState } from 'react';
import { FaPaperPlane, FaEnvelope, FaMapMarkerAlt, FaCheckCircle, FaTimes } from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '', email: '', subject: '', message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    // NEW: Modal State
    const [modal, setModal] = useState({ show: false, success: true });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch(`${import.meta.env.VITE_URL}/api/contact`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setModal({ show: true, success: true }); // Show Custom Success Modal
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                setModal({ show: true, success: false }); // Show Error Modal
            }
        } catch (error) {
            setModal({ show: true, success: false });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact-section" className="relative w-full min-h-screen flex justify-center items-center overflow-hidden py-20 px-6 bg-[var(--bg-main)] transition-colors duration-500">

            {/* --- Success/Error Modal --- */}
            {/* --- Success/Error Modal --- */}
            {modal.show && (
                <div className="fixed inset-0 w-screen h-screen z-2000 flex items-center justify-center p-4">

                    {/* 1. The Backdrop: Covers everything behind the modal */}
                    <div
                        className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity"
                        onClick={() => setModal({ ...modal, show: false })}
                    ></div>

                    {/* 2. The Modal Card: Elevated with shadow and teal borders */}
                    <div className="relative z- max-w-sm w-full bg-[var(--card-bg)] border border-brand/30 p-10 rounded-[40px] shadow-[0_0_50px_rgba(52,96,101,0.3)] text-center animate-in fade-in zoom-in duration-300">

                        {/* Close Button */}
                        <button
                            onClick={() => setModal({ ...modal, show: false })}
                            className="absolute top-6 right-6 text-slate-400 hover:text-brand transition-colors text-xl"
                        >
                            <FaTimes />
                        </button>

                        {modal.success ? (
                            <>
                                <div className="w-20 h-20 bg-brand/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <FaCheckCircle className="text-5xl text-brand" />
                                </div>
                                <h3 className="text-3xl font-bold text-[var(--text-main)] mb-2">Thank You!</h3>
                                <p className="text-slate-500 leading-relaxed">
                                    Message received! I'll get back to you soon, Sarita.
                                </p>
                            </>
                        ) : (
                            <>
                                <div className="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <span className="text-5xl">⚠️</span>
                                </div>
                                <h3 className="text-2xl font-bold text-[var(--text-main)] mb-2">Oops!</h3>
                                <p className="text-slate-500">
                                    Something went wrong. Please check if the backend is running.
                                </p>
                            </>
                        )}

                        {/* Action Button */}
                        <button
                            onClick={() => setModal({ ...modal, show: false })}
                            className="mt-10 w-full py-4 bg-brand text-white font-bold rounded-2xl shadow-lg shadow-brand/20 hover:scale-[1.02] active:scale-95 transition-all"
                        >
                            Continue
                        </button>
                    </div>
                </div>
            )}

            {/* --- Existing Video Background Layer --- */}
            <div className="absolute inset-0 z-0 w-full h-full">
                <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-30 dark:opacity-60 transition-opacity duration-500">
                    <source src="https://visiblo-theme.tavonline.co/version-4/wp-content/uploads/sites/5/2026/03/world.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-teal-100/60 dark:bg-black/40 z-10 transition-colors duration-500"></div>
            </div>

            {/* --- Content Card --- */}
            <div className="relative z-20 max-w-6xl w-full bg-[var(--card-bg)] backdrop-blur-xl p-8 md:p-16 rounded-[40px] border border-[var(--border-subtle)] shadow-xl dark:shadow-2xl transition-all duration-500">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Left Side: Info */}
                    <div className="flex flex-col justify-center">
                        <span className="text-brand uppercase tracking-widest font-bold text-sm mb-4">Contact Me</span>
                        <h2 className="text-5xl md:text-6xl font-bold text-[var(--text-main)] leading-tight mb-10 transition-colors duration-500">
                            Let’s Talk About <br />
                            <span className="text-brand">the Next Project</span>
                        </h2>

                        <div className="space-y-8">
                            <div className="flex items-center gap-6 group">
                                <div className="w-14 h-14 bg-brand/10 dark:bg-brand/20 text-brand rounded-2xl flex justify-center items-center text-2xl group-hover:scale-110 transition-transform"><FaEnvelope /></div>
                                <div>
                                    <p className="text-[#2d4f52] dark:text-slate-400 text-sm">Email</p>
                                    <strong className="text-[var(--text-main)] text-xl">sarita595k@gmail.com</strong>
                                </div>
                            </div>
                            <div className="flex items-center gap-6 group">
                                <div className="w-14 h-14 bg-brand/10 dark:bg-brand/20 text-brand rounded-2xl flex justify-center items-center text-2xl group-hover:scale-110 transition-transform"><FaMapMarkerAlt /></div>
                                <div>
                                    <p className="text-[#2d4f52] dark:text-slate-400 text-sm">Location</p>
                                    <strong className="text-[var(--text-main)] text-xl">Bangalore, Karnataka</strong>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Form */}
                    <form onSubmit={handleSubmit} className="flex flex-col gap-6 self-center">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required className="bg-brand/5 dark:bg-white/5 border border-brand/10 dark:border-white/10 p-5 rounded-2xl text-[var(--text-main)] placeholder:text-[#2d4f52]/60 dark:placeholder:text-slate-500 outline-none focus:border-brand focus:bg-brand/10 dark:focus:bg-white/10 transition-all" />
                            <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required className="bg-brand/5 dark:bg-white/5 border border-brand/10 dark:border-white/10 p-5 rounded-2xl text-[var(--text-main)] placeholder:text-[#2d4f52]/60 dark:placeholder:text-slate-500 outline-none focus:border-brand focus:bg-brand/10 dark:focus:bg-white/10 transition-all" />
                        </div>
                        <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} className="bg-brand/5 dark:bg-white/5 border border-brand/10 dark:border-white/10 p-5 rounded-2xl text-[var(--text-main)] placeholder:text-[#2d4f52]/60 dark:placeholder:text-slate-500 outline-none focus:border-brand focus:bg-brand/10 dark:focus:bg-white/10 transition-all" />
                        <textarea name="message" placeholder="Message" rows="5" value={formData.message} onChange={handleChange} required className="bg-brand/5 dark:bg-white/5 border border-brand/10 dark:border-white/10 p-5 rounded-2xl text-[var(--text-main)] placeholder:text-[#2d4f52]/60 dark:placeholder:text-slate-500 outline-none focus:border-brand focus:bg-brand/10 dark:focus:bg-white/10 transition-all resize-none"></textarea>

                        <button type="submit" disabled={isSubmitting} className={`bg-brand text-white py-5 rounded-2xl font-bold text-lg flex justify-center items-center gap-3 transition-all transform shadow-lg shadow-brand/20 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:opacity-90 hover:-translate-y-1 cursor-pointer active:scale-95'}`}>
                            {isSubmitting ? (<>Sending... <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div></>) : (<>Send Message <FaPaperPlane /></>)}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;