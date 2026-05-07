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
                        <a href="tel:09624332041" className="contact-card">
                            <div className="contact-card-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                </svg>
                            </div>
                            <div>
                                <h3>Phone</h3>
                                <p>09624332041</p>
                            </div>
                        </a>

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
