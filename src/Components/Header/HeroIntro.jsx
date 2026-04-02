import "./Header.css";

const HeroIntro = () => {
    return (
        <div className="hero-intro">
            <h1 className="hero-greeting">
                Welcome to my portfolio <span><i className="fa-solid fa-heart"></i></span>
            </h1>
            <h2 className="hero-title">
                Hi, I'm Sarita. <br />
                <span className="highlight">Full-Stack MERN Developer</span>
            </h2>
            <p className="hero-description">
                I specialize in building dynamic, scalable web applications from the ground up using MongoDB, Express.js, React, and Node.js. Passionate about writing clean code, designing robust backend architectures, and solving complex problems.
            </p>
            <div className="hero-cta">
                <a href="#projects" className="btn btn-primary">View Projects</a>
                <a href="#contact" className="btn btn-secondary">Contact Me</a>
            </div>
        </div>
    );
};

export default HeroIntro;