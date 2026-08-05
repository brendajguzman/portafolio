const groups = [
  {
    label: 'Backend',
    skills: [
      'PHP',
      'Laravel',
      'Java',
      'Spring Boot',
      'C#',
      '.NET',
      'Python',
      'Node.js',
      'Express.js',
      'REST APIs',
      'JSON',
    ],
  },
  {
    label: 'Frontend',
    skills: [
      'HTML5',
      'CSS3',
      'JavaScript (ES6+)',
      'TypeScript',
      'React',
      'Bootstrap',
      'Tailwind CSS',
      'jQuery',
      'Responsive Design',
      'Semantic HTML',
    ],
  },
  {
    label: 'Bases de Datos',
    skills: [
      'MySQL',
      'PostgreSQL',
      'SQL Server',
      'SQLite',
      'MongoDB',
      'MariaDB',
    ],
  },
  {
    label: 'Control de Versiones',
    skills: [
      'Git',
      'GitHub',
      'GitLab',
    ],
  },
  {
    label: 'Herramientas',
    skills: [
      'VS Code',
      'Postman',
      'Docker',
      'WordPress',
      'Figma',
      'Jira',
      'Azure DevOps',
    ],
  },
  {
    label: 'Metodologías',
    skills: [
      'Scrum',
      'Kanban',
      'MVC',
      'Arquitectura Web',
      'POO',
      'REST',
    ],
  },
];

export default function Skills() {
  return (
    <section id="habilidades" className="py-24 max-w-5xl mx-auto px-6">
      <h2 className="font-display text-3xl font-bold text-text mb-2">Habilidades</h2>
      <div className="w-10 h-1 bg-primary rounded mb-12" />

      <div className="grid md:grid-cols-3 gap-8">
        {groups.map(g => (
          <div key={g.label} className="bg-surface border border-border rounded-xl p-6">
            <p className="font-display text-xs text-accent tracking-widest uppercase mb-5">
              {g.label}
            </p>
            <div className="flex flex-wrap gap-2">
              {g.skills.map(s => <span key={s} className="pill">{s}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
