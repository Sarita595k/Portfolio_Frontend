const HeroIntro = () => {
    return (
        <div className="relative z-20 flex flex-col gap-6 p-8 md:p-12 max-w-2xl">
            <h1 className="text-[var(--text-main)] text-3xl md:text-4xl font-protest flex items-center gap-3 transition-colors duration-500">
                Welcome to my portfolio
                <span className="text-red-600 dark:text-red-500 animate-pulse">
                    <i className="fa-solid fa-heart"></i>
                </span>
            </h1>

            <h2 className="text-5xl md:text-6xl font-bold text-[var(--text-main)] leading-tight transition-colors duration-500">
                Hi, I'm Sarita. <br />
                <span className="text-brand text-4xl md:text-5xl">Full-Stack MERN Developer</span>
            </h2>

            <p className="text-[#2d4f52] dark:text-slate-300 text-lg md:text-xl leading-relaxed font-light transition-colors duration-500">
                I specialize in building dynamic, scalable web applications from the ground up using
                <span className="text-brand dark:text-white font-medium"> MongoDB, Express, React, and Node.js</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <a href='#projects-section' className="px-8 py-3 bg-brand text-white rounded-full font-bold text-center transition-all hover:bg-[#1a3133] shadow-lg shadow-brand/20">
                    View Projects
                </a>
                <a href='#contact-section'
                    className="px-8 py-3 border-2 border-brand text-brand dark:border-white dark:text-white rounded-full font-bold text-center transition-all hover:bg-brand hover:text-white dark:hover:bg-white dark:hover:text-black">
                    Contact Me
                </a>
            </div>
        </div>
    );
};

export default HeroIntro