import './Projects.css'

const projects = [
    {
        title: 'ARound BulSU',
        subtitle: 'Smart AR Campus Navigation & Evacuation App',
        description:
            'An augmented reality mobile application providing real-time campus navigation and emergency evacuation routes for Bulacan State University stakeholders. Features Dijkstra\'s algorithm for optimal pathfinding within the AR interface and an accessible UI/UX design.',
        tags: ['Unity', 'C#', 'ARCore', 'Dijkstra\'s Algorithm', 'Mobile App'],
        status: 'Ongoing — Thesis Project',
        links: {
            github: null,
            live: null,
        },
    },
    {
        title: 'Employment Outcomes Research',
        subtitle: 'Dressmaking NC II 2023 Graduates Analysis',
        description:
            'Conducted employment outcome analysis of 95 Dressmaking NC II graduates, analyzing employment trends and career progression to evaluate qualification effectiveness. Presented findings to TESDA administration to inform program improvement strategies.',
        tags: ['Microsoft Excel', 'Data Analysis', 'Data Visualization', 'Research'],
        status: 'Completed — TESDA RTCCL Internship',
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
