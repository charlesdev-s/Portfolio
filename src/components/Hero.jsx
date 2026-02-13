import './Hero.css'

function Hero() {
    const handleDownloadCV = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch('/Charles-Richard-Gamido-CV.pdf')
            const blob = await response.blob()
            const url = window.URL.createObjectURL(blob)
            const link = document.createElement('a')
            link.href = url
            link.download = 'Charles-Richard-Gamido-CV.pdf'
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
            window.URL.revokeObjectURL(url)
        } catch (err) {
            window.open('/Charles-Richard-Gamido-CV.pdf', '_blank')
        }
    }

    return (
        <section className="hero" id="hero">
            {/* Ambient blobs */}
            <div className="gradient-mesh">
                <div className="blob"></div>
                <div className="blob"></div>
                <div className="blob"></div>
            </div>

            <div className="hero-container container">
                <div className="hero-content">
                    <div className="hero-badge">Available for opportunities</div>
                    <h1 className="hero-title">
                        <span className="hero-greeting">Hi, I'm</span>
                        <span className="hero-name">Charles Richard<span className="accent-dot">.</span></span>
                    </h1>
                    <p className="hero-subtitle">
                        Developer · Data Analyst · Multimedia Creator
                    </p>
                    <p className="hero-description">
                        BS Mathematics & Computer Science student crafting solutions through
                        code, data, and design. Passionate about AR development, software
                        engineering, and turning complex problems into elegant experiences.
                    </p>
                    <div className="hero-actions">
                        <button
                            onClick={handleDownloadCV}
                            className="btn btn-primary"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                <polyline points="7 10 12 15 17 10" />
                                <line x1="12" y1="15" x2="12" y2="3" />
                            </svg>
                            Download CV
                        </button>
                        <a href="#contact" className="btn btn-secondary">
                            Get in Touch
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12" />
                                <polyline points="12 5 19 12 12 19" />
                            </svg>
                        </a>
                    </div>
                </div>

                <div className="hero-image-wrapper">
                    <div className="hero-image-ring">
                        <img
                            src="/charles-photo.jpg"
                            alt="Charles Richard Gamido"
                            className="hero-image"
                        />
                    </div>
                    <div className="hero-image-glow"></div>
                </div>
            </div>

            <div className="hero-scroll-indicator">
                <span>Scroll</span>
                <div className="scroll-line"></div>
            </div>
        </section>
    )
}

export default Hero
