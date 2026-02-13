import './Skills.css'

const skillCategories = [
    {
        title: 'Programming',
        skills: ['C', 'C++', 'C#', 'Java', 'Python', 'MATLAB'],
    },
    {
        title: 'Development',
        skills: ['Unity', 'AR Development', 'ARCore / ARKit', 'Mobile Apps'],
    },
    {
        title: 'Design & Media',
        skills: ['Adobe Photoshop', 'Illustrator', 'Inkscape', 'Canva', 'CapCut', 'Filmora'],
    },
    {
        title: 'Tools & Other',
        skills: ['LaTeX', 'MS Office Suite', 'Google Workspace', 'Git', 'Photography', 'Hardware Assembly'],
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
