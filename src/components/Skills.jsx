import './Skills.css'

const skillCategories = [
    {
        title: 'Languages',
        skills: ['C', 'C++', 'C#', 'Java', 'Python', 'TypeScript', 'Node.js', 'React Native', 'MATLAB'],
    },
    {
        title: 'Frameworks & Tools',
        skills: ['Unity', 'ARCore/ARKit', 'Supabase', 'Zustand', 'Git'],
    },
    {
        title: 'Data & Analytics',
        skills: ['R', 'Jamovi', 'MS Excel (Advanced)', 'GLM / Regression Modeling', 'Statistical Diagnostics'],
    },
    {
        title: 'Design',
        skills: ['Adobe Photoshop', 'Illustrator', 'Inkscape', 'Canva', 'LaTeX'],
    },
    {
        title: 'Other',
        skills: ['CRM & Spreadsheet Systems', 'Discord Community Management', 'Hardware Assembly', 'Windows/Linux'],
    },
]

function Skills() {
    return (
        <section className="section skills" id="skills">
            <div className="container">
                <div className="reveal">
                    <span className="section-label">Skills</span>
                    <h2 className="section-title">Tools & Technologies</h2>
                </div>

                <div className="skills-grid reveal-stagger">
                    {skillCategories.map((cat) => (
                        <div key={cat.title} className="skill-category">
                            <h3 className="skill-category-title">{cat.title}</h3>
                            <div className="skill-chips">
                                {cat.skills.map((skill) => (
                                    <span key={skill} className="skill-chip">{skill}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills
