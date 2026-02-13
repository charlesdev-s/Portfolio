import './About.css'

function About() {
    return (
        <section className="section about" id="about">
            <div className="container">
                <div className="reveal">
                    <span className="section-label">About Me</span>
                    <h2 className="section-title">Turning Ideas Into Reality</h2>
                </div>

                <div className="about-grid reveal">
                    <div className="about-text">
                        <p>
                            I'm a <strong>BS Mathematics & Computer Science</strong> student at
                            <strong> Bulacan State University</strong>, passionate about building
                            solutions that sit at the intersection of technology, data, and design.
                        </p>
                        <p>
                            With experience spanning <strong>software development</strong>,
                            <strong> AR applications</strong>, <strong>data analysis</strong>, and
                            <strong> multimedia production</strong>, I bring a versatile skill set
                            to every project. I thrive on tackling complex problems and
                            transforming them into clean, functional, and visually engaging
                            experiences.
                        </p>
                        <p>
                            Beyond coding, I've led media teams, produced content strategies,
                            and contributed to community outreach — always driven by a desire
                            to create meaningful impact.
                        </p>
                    </div>

                    <div className="about-details">
                        <div className="about-card">
                            <div className="about-card-icon">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                                    <path d="M6 12v5c0 1.1 2.7 3 6 3s6-1.9 6-3v-5" />
                                </svg>
                            </div>
                            <div>
                                <h3>Education</h3>
                                <p>BS Mathematics, Major in Computer Science</p>
                                <span>Bulacan State University · Expected June 2026</span>
                            </div>
                        </div>
                        <div className="about-card">
                            <div className="about-card-icon">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                                    <circle cx="12" cy="10" r="3" />
                                </svg>
                            </div>
                            <div>
                                <h3>Location</h3>
                                <p>Baliuag City, Bulacan</p>
                                <span>Philippines</span>
                            </div>
                        </div>
                        <div className="about-card">
                            <div className="about-card-icon">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                                </svg>
                            </div>
                            <div>
                                <h3>Focus Areas</h3>
                                <p>Software Engineering · AR Development</p>
                                <span>Data Analysis · Multimedia Design</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
