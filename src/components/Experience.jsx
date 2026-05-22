import './Experience.css'

const experiences = [
    {
        role: 'Virtual Assistant',
        company: 'The Sales Space (Daniel Kuye) - Remote, United Kingdom',
        period: 'March 2026 - April 2026',
        points: [
            'Managed daily Discord community operations, maintaining student engagement and real-time support',
            'Built and maintained CRM spreadsheets and student progress trackers with frequent updates',
            'Executed daily outbound DM campaigns to warm leads with fast client conversations',
            'Coordinated with the Head Coach on task delegation, attendance tracking, and time-sensitive requests',
        ],
    },
    {
        role: 'Admin Office Intern',
        company: 'TESDA Regional Training Center Central Luzon - Guiguinto, Bulacan',
        period: 'June 2025 - July 2025',
        points: [
            'Digitized and reorganized institutional filing systems and encoded financial records in Excel',
            'Co-authored employment outcome research on 95 Dressmaking NC II graduates and presented findings',
            'Produced multimedia content for institutional programs, including AVP highlights and newsletters',
        ],
    },
    {
        role: 'Non-Voice Call Center Agent',
        company: 'Customer Support - Hybrid, Bustos, Bulacan',
        period: 'July 2022 - January 2023',
        points: [
            'Handled 200-300 daily tickets via chat and email with high resolution and QA scores',
            'Managed data entry and issue escalation accurately',
        ],
    },
]

function Experience() {
    return (
        <section className="section experience" id="experience">
            <div className="container">
                <div className="reveal">
                    <span className="section-label">Experience</span>
                    <h2 className="section-title">Where I've Contributed</h2>
                </div>

                <div className="timeline">
                    {experiences.map((exp, index) => (
                        <div key={index} className="timeline-item reveal">
                            <div className="timeline-marker">
                                <div className="timeline-dot"></div>
                                {index < experiences.length - 1 && <div className="timeline-line"></div>}
                            </div>
                            <div className="timeline-content">
                                <div className="timeline-header">
                                    <h3 className="timeline-role">{exp.role}</h3>
                                    {exp.period && <span className="timeline-period">{exp.period}</span>}
                                </div>
                                {exp.company && <p className="timeline-company">{exp.company}</p>}
                                <ul className="timeline-points">
                                    {exp.points.map((point, i) => (
                                        <li key={i}>{point}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Experience
