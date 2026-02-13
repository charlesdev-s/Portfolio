import './Experience.css'

const experiences = [
    {
        role: 'Office of the Admin Intern',
        company: 'TESDA Regional Training Center Central Luzon — Guiguinto',
        period: 'June 2025 – July 2025',
        points: [
            'Produced AVP highlights, photo documentation, and newsletter layouts for institutional programs',
            'Managed digitization and organization of filing systems; encoded financial records in Excel',
            'Co-authored research on employment outcomes of Dressmaking NC II graduates',
            'Streamlined office operations through document scanning and attendance compilation',
        ],
    },
    {
        role: 'Communications Team Lead — Media Ministry',
        company: 'Every Nation Campus (ENC), Baliwag',
        period: 'September 2023 – January 2025',
        points: [
            'Led the media team for over a year, overseeing photography, design, and digital content production',
            'Recruited and trained student volunteers in photography, graphic design, and social media management',
            'Directed content strategy for official social media pages with consistent branding',
        ],
    },
    {
        role: 'Non-Voice Call Center Agent',
        company: 'BPO Company',
        period: 'July 2022 – January 2023',
        points: [
            'Resolved customer inquiries via chat and email while maintaining high quality assurance scores',
            'Managed data entry and ticket documentation for 200-300 cases daily',
        ],
    },
    {
        role: 'Logistics Sorter / Picker',
        company: 'Lazada / Shopee — Meycauayan City, Bulacan',
        period: 'November 2021 – December 2021',
        points: [
            'Sorted and packed 350-500 parcels daily to meet strict dispatch schedules',
            'Optimized warehouse picking processes through organized inventory checks',
        ],
    },
    {
        role: 'Sales Encoder',
        company: 'Dishwashing Supply Store — Baliuag City, Bulacan',
        period: '',
        points: [
            'Encoded daily sales transactions and inventory logs in Microsoft Excel',
            'Monitored stock levels and generated reports for restocking decisions',
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
                                <p className="timeline-company">{exp.company}</p>
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
