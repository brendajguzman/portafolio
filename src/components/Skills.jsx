const groups = [
  {
    label: 'Backend',
    skills: [
      'PHP',
      'MySQL',
      'SQL',
      'MVC',
      'REST APIs',
      'Procedimientos Almacenados',
      'Composer',
      'Generación de PDFs'
    ],
  },
  {
    label: 'Frontend',
    skills: [
      'JavaScript',
      'HTML5',
      'CSS3',
      'Bootstrap',
      'jQuery',
      'React',
      'Diseño de Interfaces'
    ],
  },
  {
    label: 'Herramientas y Metodologías',
    skills: [
      'Git',
      'GitHub',
      'VS Code',
      'Postman',
      'WordPress',
      'Scrum',
      'Arquitectura Web'
    ],
  },
]

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
