import { useEffect, useState } from 'react'
import './Hero.css'

const ROLES = [
    'Full-stack Developer',
    'Data Analyst',
    'Mobile & AR Developer',
    'Mathematical Modeler',
]

function useTypewriter(words, { typeSpeed = 75, deleteSpeed = 40, pause = 1600 } = {}) {
    const [text, setText] = useState('')
    const [wordIndex, setWordIndex] = useState(0)
    const [deleting, setDeleting] = useState(false)

    useEffect(() => {
        const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        if (prefersReduced) {
            setText(words[0])
            return
        }

        const currentWord = words[wordIndex % words.length]

        if (!deleting && text === currentWord) {
            const t = setTimeout(() => setDeleting(true), pause)
            return () => clearTimeout(t)
        }
        if (deleting && text === '') {
            setDeleting(false)
            setWordIndex((i) => (i + 1) % words.length)
            return
        }

        const t = setTimeout(() => {
            setText((prev) =>
                deleting
                    ? currentWord.substring(0, prev.length - 1)
                    : currentWord.substring(0, prev.length + 1)
            )
        }, deleting ? deleteSpeed : typeSpeed)
        return () => clearTimeout(t)
    }, [text, deleting, wordIndex, words, typeSpeed, deleteSpeed, pause])

    return text
}

function Hero() {
    const typed = useTypewriter(ROLES)
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
                        <span className="hero-name">Charles Richard Gamido<span className="accent-dot">.</span></span>
                    </h1>
                    <p className="hero-subtitle" aria-live="polite">
                        <span className="typewriter-text">{typed}</span>
                        <span className="typewriter-caret" aria-hidden="true">|</span>
                    </p>
                    <p className="hero-description">
                        Full-stack developer and data analyst with hands-on experience in mobile
                        app development, statistical modeling, and CRM systems. I build end-to-end
                        solutions across React Native, Python, and C# with a strong mathematical
                        foundation.
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
                            Download Resume
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
                            src="/charles-headshot-2026.jpg"
                            alt="Charles Richard Gamido portrait"
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
