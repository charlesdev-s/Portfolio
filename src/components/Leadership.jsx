import './Leadership.css'

const activities = [
    {
        role: 'Communications Team Lead — Media Ministry',
        organization: 'Every Nation Campus (ENC) — Baliwag, Bulacan',
        period: 'Sept 2023 - Jan 2025',
        points: [
            'Led a media team for over a year; recruited and trained student volunteers in photography, design, and social media',
            'Directed content strategy and branding across team output',
        ],
    },
]

function Leadership() {
    return (
        <section className="section leadership" id="leadership">
            <div className="container">
                <div className="reveal">
                    <span className="section-label">Leadership & Activities</span>
                    <h2 className="section-title">Beyond the Code</h2>
                </div>

                <div className="leadership-list reveal-stagger">
                    {activities.map((item, index) => (
                        <article key={index} className="leadership-card">
                            <div className="leadership-header">
                                <h3 className="leadership-role">{item.role}</h3>
                                <span className="leadership-period">{item.period}</span>
                            </div>
                            <p className="leadership-org">{item.organization}</p>
                            <ul className="leadership-points">
                                {item.points.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Leadership
