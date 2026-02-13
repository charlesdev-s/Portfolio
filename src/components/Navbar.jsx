import { useState, useEffect } from 'react'
import './Navbar.css'

function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { label: 'About', href: '#about' },
        { label: 'Skills', href: '#skills' },
        { label: 'Projects', href: '#projects' },
        { label: 'Experience', href: '#experience' },
        { label: 'Contact', href: '#contact' },
    ]

    const handleNavClick = () => setMenuOpen(false)

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
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container container">
                <a href="#" className="navbar-logo">
                    <span className="logo-accent">C</span>harles<span className="logo-dot">.</span>
                </a>

                <button
                    className={`navbar-toggle ${menuOpen ? 'active' : ''}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle navigation"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a href={link.href} onClick={handleNavClick}>{link.label}</a>
                        </li>
                    ))}
                    <li>
                        <button
                            onClick={handleDownloadCV}
                            className="nav-cta"
                        >
                            Resume
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
