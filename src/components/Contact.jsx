import './Contact.css'

function Contact() {
    return (
        <section className="section contact" id="contact">
            <div className="container">
                <div className="reveal">
                    <span className="section-label">Contact</span>
                    <h2 className="section-title">Let's Connect</h2>
                </div>

                <div className="contact-content reveal">
                    <p className="contact-text">
                        I'm always open to new opportunities, collaborations, or just a
                        friendly conversation. Feel free to reach out through any of the
                        channels below.
                    </p>

                    <div className="contact-cards">
                        <a href="mailto:charlesrg31@gmail.com" className="contact-card">
                            <div className="contact-card-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect width="20" height="16" x="2" y="4" rx="2" />
                                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                </svg>
                            </div>
                            <div>
                                <h3>Gmail</h3>
                                <p>charlesrg31@gmail.com</p>
                            </div>
                        </a>

                        <a href="mailto:charlesrg311@outlook.com" className="contact-card">
                            <div className="contact-card-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect width="20" height="16" x="2" y="4" rx="2" />
                                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                </svg>
                            </div>
                            <div>
                                <h3>Outlook</h3>
                                <p>charlesrg311@outlook.com</p>
                            </div>
                        </a>

                        <a href="#" className="contact-card contact-card-soon" title="Coming soon">
                            <div className="contact-card-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                                    <path d="M9 18c-4.51 2-5-2-7-2" />
                                </svg>
                            </div>
                            <div>
                                <h3>GitHub</h3>
                                <p>Coming soon</p>
                            </div>
                        </a>

                        <a href="#" className="contact-card contact-card-soon" title="Coming soon">
                            <div className="contact-card-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                    <rect width="4" height="12" x="2" y="9" />
                                    <circle cx="4" cy="4" r="2" />
                                </svg>
                            </div>
                            <div>
                                <h3>LinkedIn</h3>
                                <p>Charles Richard Gamido</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            <footer className="footer">
                <div className="container">
                    <div className="footer-content">
                        <p className="footer-brand">
                            <span className="logo-accent">C</span>harles Richard Gamido
                        </p>
                        <p className="footer-copy">
                            © {new Date().getFullYear()}
                        </p>
                    </div>
                </div>
            </footer>
        </section>
    )
}

export default Contact
