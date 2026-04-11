import { FaLinkedin, FaGithub, FaEnvelope, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="relative bg-[var(--bg-main)] text-[var(--text-main)] pt-20 pb-10 px-6 border-t border-[var(--border-subtle)] transition-colors duration-500">
            <div className="max-w-7xl mx-auto">

                {/* Main Footer Content */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-16">

                    {/* Brand Section */}
                    <div className="text-center md:text-left">
                        <h3 className="text-3xl font-protest text-brand mb-2 tracking-wider">SARITA</h3>
                        <p className="text-[#2d4f52] dark:text-slate-400 text-lg transition-colors">
                            Full Stack MERN Developer based in Bangalore.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="flex gap-8 text-[#2d4f52] dark:text-slate-300 font-medium transition-colors">
                        {/* <a href="#about-section" className="hover:text-brand transition-colors duration-300">About</a>
                        <a href="#projects-section" className="hover:text-brand transition-colors duration-300">Projects</a>
                        <a href="#skills-section" className="hover:text-brand transition-colors duration-300">Skills</a>
                        <a href="#contact-section" className="hover:text-brand transition-colors duration-300">Contact</a> */}
                    </div>

                    {/* Social Icons */}
                    <div className="flex gap-5">
                        <a href="https://www.linkedin.com/in/sarita595" target="_blank" rel="noreferrer"
                            className="text-2xl text-[#2d4f52] dark:text-slate-400 hover:text-brand hover:-translate-y-1 transition-all duration-300">
                            <FaLinkedin />
                        </a>
                        <a href="https://github.com/Sarita595k" target="_blank" rel="noreferrer"
                            className="text-2xl text-[#2d4f52] dark:text-slate-400 hover:text-brand hover:-translate-y-1 transition-all duration-300">
                            <FaGithub />
                        </a>
                        <a href="mailto:sarita595k@gmail.com"
                            className="text-2xl text-[#2d4f52] dark:text-slate-400 hover:text-brand hover:-translate-y-1 transition-all duration-300">
                            <FaEnvelope />
                        </a>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-[var(--border-subtle)] flex flex-col md:flex-row justify-between items-center gap-6 text-[#2d4f52]/60 dark:text-slate-500 text-sm transition-colors">
                    <p>&copy; {new Date().getFullYear()} Sarita. All rights reserved.</p>

                    {/* Back to Top Button */}
                    <button
                        onClick={scrollToTop}
                        className="group flex items-center gap-3 bg-brand/5 dark:bg-white/5 hover:bg-brand hover:text-white px-5 py-3 rounded-full transition-all duration-500 border border-brand/10 dark:border-white/10 hover:border-brand cursor-pointer"
                    >
                        <span className="font-bold uppercase tracking-widest text-xs">Back to Top</span>
                        <div className="w-8 h-8 bg-brand/20 group-hover:bg-white/20 rounded-full flex justify-center items-center text-brand group-hover:text-white transition-colors">
                            <FaArrowUp />
                        </div>
                    </button>
                </div>

            </div>
        </footer>
    );
};

export default Footer;