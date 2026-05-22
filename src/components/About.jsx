import './About.css'

function About() {
    return (
        <section className="section about" id="about">
            <div className="container">
                <div className="reveal">
                    <span className="section-label">About Me</span>
                    <h2 className="section-title">Turning Ideas Into Reality</h2>
                </div>

                <div className="about-stats reveal-stagger">
                    <div className="about-stat">
                        <span className="about-stat-number">4+</span>
                        <span className="about-stat-label">Featured Projects</span>
                    </div>
                    <div className="about-stat">
                        <span className="about-stat-number">3</span>
                        <span className="about-stat-label">Professional Roles</span>
                    </div>
                    <div className="about-stat">
                        <span className="about-stat-number">10+</span>
                        <span className="about-stat-label">Languages &amp; Tools</span>
                    </div>
                    <div className="about-stat">
                        <span className="about-stat-number">1.5+</span>
                        <span className="about-stat-label">Years Leading a Team</span>
                    </div>
                </div>

                <div className="about-grid reveal">
                    <div className="about-text">
                        <p>
                            I'm a <strong>full-stack developer and data analyst</strong> based in
                            <strong> Baliuag City, Bulacan</strong>, currently completing my
                            <strong> B.S. Mathematics (Computer Science)</strong> at Bulacan State
                            University.
                        </p>
                        <p>
                            My work spans <strong>mobile app development</strong>,
                            <strong> AR experiences</strong>, and <strong>statistical modeling</strong>.
                            I build end-to-end solutions across <strong>React Native</strong>,
                            <strong> Python</strong>, and <strong>C#</strong>, and enjoy turning
                            complex data into actionable insights.
                        </p>
                        <p>
                            Recent work includes <strong>CRM operations</strong>,
                            <strong> community management</strong>, and research projects like
                            dengue-climate modeling and employment outcomes analysis.
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
                                <p>B.S. Mathematics (Computer Science)</p>
                                <span>Bulacan State University · June 2026</span>
                                <p className="about-card-secondary">Senior High School &mdash; STEM</p>
                                <span>Marian College of Baliwag · June 2022</span>
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
                                <p>Full-stack & Mobile Development · AR/Unity</p>
                                <span>Data Analysis · Statistical Modeling</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
