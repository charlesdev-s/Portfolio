import './Projects.css'

const projects = [
    {
        title: 'LearnJ',
        subtitle: 'AI-Powered Japanese Learning App',
        description:
            'Built a cross-platform mobile app with AI tutoring, speech-to-text pronunciation practice, and a gamified N5-N1 progress system with streaks and XP.',
        tags: ['React Native', 'TypeScript', 'Gemini API', 'Supabase', 'Zustand'],
        status: 'Dec 2025 - Mar 2026',
        links: {
            github: null,
            live: null,
        },
    },
    {
        title: 'ARound BulSU',
        subtitle: 'AR Campus Navigation App (Thesis)',
        description:
            'Developing a real-time AR navigation and evacuation app for BulSU using optimal pathfinding algorithms and leading UI/UX design for diverse users.',
        tags: ['Unity', 'C#', 'ARCore/ARKit', 'Pathfinding', 'UI/UX'],
        status: 'Thesis Project - Ongoing',
        links: {
            github: null,
            live: null,
        },
    },
    {
        title: 'Climatic Factors & Dengue Incidence',
        subtitle: 'Mathematical Modeling Study',
        description:
            'Modeled dengue-climate relationships and identified relative humidity as the primary driver using VIF, AIC, and BIC diagnostics; presented findings to local health researchers.',
        tags: ['R', 'Jamovi', 'Regression Modeling', 'Statistical Diagnostics'],
        status: '2025',
        links: {
            github: null,
            live: null,
        },
    },
]

function Projects() {
    return (
        <section className="section projects" id="projects">
            <div className="container">
                <div className="reveal">
                    <span className="section-label">Projects</span>
                    <h2 className="section-title">Featured Work</h2>
                </div>

                <div className="projects-list reveal-stagger">
                    {projects.map((project) => (
                        <article key={project.title} className="project-card">
                            <div className="project-card-content">
                                <div className="project-status">{project.status}</div>
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-subtitle">{project.subtitle}</p>
                                <p className="project-description">{project.description}</p>
                                <div className="project-tags">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="project-tag">{tag}</span>
                                    ))}
                                </div>
                                <div className="project-links">
                                    {project.links.github ? (
                                        <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="project-link">
                                            GitHub →
                                        </a>
                                    ) : (
                                        <span className="project-link-soon">Links coming soon</span>
                                    )}
                                </div>
                            </div>
                            <div className="project-card-accent"></div>
                        </article>
                    ))}
                </div>

                <div className="projects-note reveal">
                    <p>More projects are in the works. Check back soon!</p>
                </div>
            </div>
        </section>
    )
}

export default Projects
