import heroImage from '../../assets/banner-stack.png';

function Hero() {
    return (
        <section className="hero-section container">
            <div className="hero-copy">
                <h1>
                    Build Your Ideal
                    <span className="gradient-text">Development Stack</span>
                </h1>
                <p>
                    Explore frontend, backend, and tooling options. Compare technologies and
                    build the perfect stack for your next project.
                </p>
                <div className="hero-actions">
                    <button type="button" className="primary-button">
                        Explore Technologies
                    </button>
                    <button type="button" className="secondary-button">
                        Learn More
                    </button>
                </div>
            </div>

            <div className="hero-visual">
                <img src={heroImage} alt="Development Stack illustration" />
            </div>
        </section>
    );
}

export default Hero;
