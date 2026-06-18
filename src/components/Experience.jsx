const jobs = [
  {
    title: 'Full Stack Developer',
    company: 'Corporativo Jacc | Producciones Conti',
    period: 'Feb 2024 — Jun 2026',
    highlights: [
      'Desarrollo y mantenimiento de módulos ERP empresariales.',
      'Implementación de procesos para ventas, clientes, inventarios y almacenes.',
      'Desarrollo de interfaces web y lógica de negocio.',
      'Creación y optimización de consultas SQL y procedimientos almacenados.',
      'Generación de tickets, PDFs y documentos administrativos.',
      'Trabajo bajo arquitectura MVC y control de versiones con Git.',
    ],
    stack: ['PHP', 'JavaScript', 'MySQL', 'MVC', 'Git', 'GitHub'],
  },
  {
    title: 'Coordinadora de Proyectos y Plataformas Digitales',
    company: 'Liceo Michoacano',
    period: 'May 2022 — Dic 2023',
    highlights: [
      'Administración de plataformas digitales institucionales.',
      'Gestión de CRM para seguimiento de prospectos y alumnos.',
      'Generación de reportes y análisis de información.',
      'Coordinación de proyectos tecnológicos y procesos administrativos.',
    ],
    stack: ['WordPress', 'CRM', 'Reportes', 'Administración Web'],
  },
  {
    title: 'Desarrolladora Web',
    company: 'Conservatorio de las Rosas Morelia',
    period: 'Sep 2021 — Abr 2022',
    highlights: [
      'Desarrollo y mantenimiento de sitios web institucionales.',
      'Implementación de mejoras funcionales.',
      'Optimización de contenido y experiencia de usuario.',
      'Soporte técnico y atención de incidencias.',
    ],
    stack: ['HTML', 'CSS', 'JavaScript', 'WordPress'],
  },
]

export default function Experience() {
  return (
    <section id="experiencia" className="py-24 max-w-5xl mx-auto px-6">
      <h2 className="font-display text-3xl font-bold text-text mb-2">Experiencia</h2>
      <div className="w-10 h-1 bg-primary rounded mb-12" />

      <div className="space-y-12">
        {jobs.map((job, i) => (
          <div key={i} className="pl-6 relative border-l border-border">
            <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-bg" />

            <p className="text-accent font-display text-xs tracking-widest uppercase mb-1">
              {job.period}
            </p>

            <h3 className="font-display text-xl font-semibold text-text">
              {job.title}
            </h3>

            <p className="text-primary text-sm mb-4">
              {job.company}
            </p>

            <ul className="space-y-2 mb-4 text-text/80">
              {job.highlights.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-primary">▹</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {job.stack.map((t) => (
                <span key={t} className="pill">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
