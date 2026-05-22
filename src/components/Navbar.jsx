import { useState, useEffect } from 'react'
import './Navbar.css'

const navLinks = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Leadership', href: '#leadership', id: 'leadership' },
    { label: 'Contact', href: '#contact', id: 'contact' },
]

function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('')
    const [scrollProgress, setScrollProgress] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)

            // Scroll progress bar (0..1)
            const docHeight = document.documentElement.scrollHeight - window.innerHeight
            const progress = docHeight > 0 ? window.scrollY / docHeight : 0
            setScrollProgress(Math.max(0, Math.min(1, progress)))
        }
        window.addEventListener('scroll', handleScroll, { passive: true })
        handleScroll()
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        const sectionIds = navLinks.map((l) => l.id)
        const sections = sectionIds
            .map((id) => document.getElementById(id))
            .filter(Boolean)

        if (sections.length === 0) return

        const observer = new IntersectionObserver(
            (entries) => {
                // Pick the entry closest to the top that's currently intersecting
                const visible = entries
                    .filter((e) => e.isIntersecting)
                    .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
                if (visible[0]) setActiveSection(visible[0].target.id)
            },
            { rootMargin: '-30% 0px -55% 0px', threshold: 0 }
        )

        sections.forEach((s) => observer.observe(s))
        return () => observer.disconnect()
    }, [])

    const handleNavClick = () => setMenuOpen(false)

    const handleDownloadCV = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch('/Charles-Richard-Gamido-Resume.pdf')
            const blob = await response.blob()
            const url = window.URL.createObjectURL(blob)
            const link = document.createElement('a')
            link.href = url
            link.download = 'Charles-Richard-Gamido-Resume.pdf'
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
            window.URL.revokeObjectURL(url)
        } catch (err) {
            window.open('/Charles-Richard-Gamido-Resume.pdf', '_blank')
        }
    }

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div
                className="scroll-progress"
                style={{ transform: `scaleX(${scrollProgress})` }}
                aria-hidden="true"
            />
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
                            <a
                                href={link.href}
                                onClick={handleNavClick}
                                className={activeSection === link.id ? 'active' : ''}
                            >
                                {link.label}
                            </a>
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
