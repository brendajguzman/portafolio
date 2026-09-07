const jobs = [
  {
    title: 'Full Stack Developer',
    company: 'Corporativo Jacc',
    period: 'Feb 2024 — Jun 2026',
    highlights: [
      'Diseño, desarrollo y mantenimiento de aplicaciones web empresariales para un sistema ERP multiempresa.',
      'Desarrollo de módulos administrativos para compras, ventas, inventarios, almacenes, clientes, proveedores y recursos humanos.',
      'Implementación de interfaces web responsivas utilizando HTML5, CSS3, JavaScript (ES6+), React, Bootstrap y Tailwind CSS, priorizando la experiencia de usuario y la usabilidad.',
      'Desarrollo de lógica de negocio, validaciones frontend y backend e integración de APIs y servicios internos.',
      'Análisis de requerimientos, diseño de soluciones técnicas y colaboración con usuarios de distintas áreas para optimizar procesos de negocio.',
      'Diseño y optimización de consultas SQL, procedimientos almacenados y estructuras de bases de datos para mejorar el rendimiento del sistema.',
      'Generación de reportes dinámicos, documentos PDF, tickets y formatos administrativos personalizados.',
      'Trabajo bajo arquitectura MVC, control de versiones con Git y metodologías ágiles Scrum, participando en el desarrollo, mantenimiento y mejora continua de la plataforma.',
    ],
    stack: [
      'PHP',
      'JavaScript (ES6+)',
      'React',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'Bootstrap',
      'MySQL',
      'REST APIs',
      'MVC',
      'Git',
      'GitHub',
      'Scrum',
    ],
  },
  {
  title: 'Fundadora & Full Stack Developer',
  company: 'Estudio Binario MX',
  period: 'Jul 2026 — Actualidad',
  highlights: [
    'Fundación y desarrollo de un estudio especializado en soluciones web, productos digitales y diseño de experiencias enfocadas en negocios y emprendedores.',
    'Diseño, desarrollo e implementación de sitios web corporativos, landing pages y plataformas personalizadas con enfoque en rendimiento, conversión y experiencia de usuario.',
    'Creación de la plataforma "Invitaciones Digitales", un producto SaaS desarrollado con Laravel, Inertia y React para la gestión de eventos, RSVP, invitados y URLs personalizadas.',
    'Diseño y desarrollo del sitio web de "Mañana Rica", optimizando el flujo de compra mediante WhatsApp, selección de paquetes, personalización de pedidos y diseño responsive.',
    'Desarrollo de interfaces modernas utilizando React, Tailwind CSS, JavaScript y HTML5, priorizando accesibilidad, usabilidad y rendimiento.',
    'Gestión completa del ciclo de vida de proyectos: levantamiento de requerimientos, prototipado, desarrollo, pruebas, despliegue y mejora continua.',
    'Colaboración directa con clientes para transformar necesidades de negocio en soluciones digitales funcionales y escalables.',
  ],
  stack: [
    'Laravel',
    'PHP',
    'React',
    'Inertia',
    'TypeScript',
    'JavaScript',
    'Tailwind CSS',
    'HTML5',
    'CSS3',
    'MySQL',
    'REST APIs',
    'Git',
    'UX/UI',
    'Figma',
    'Vite',
  ],
},
  {
    title: 'Coordinadora de Proyectos y Plataformas Digitales',
    company: 'Liceo Michoacano',
    period: 'May 2022 — Dic 2023',
    highlights: [
      'Administración, soporte y optimización de plataformas digitales institucionales para procesos académicos y administrativos.',
      'Gestión de CRM para el seguimiento de prospectos, alumnos e indicadores de desempeño.',
      'Administración, actualización y mantenimiento de sitios web desarrollados en WordPress, implementando mejoras funcionales y de experiencia de usuario.',
      'Análisis de información y generación de reportes para apoyar la toma de decisiones y estrategias de captación.',
      'Coordinación de proyectos tecnológicos orientados a la digitalización y mejora continua de procesos institucionales.',
      'Implementación de automatizaciones y optimización de flujos de trabajo mediante herramientas digitales.',
      'Colaboración con equipos multidisciplinarios para el análisis de requerimientos y ejecución de iniciativas tecnológicas.',
    ],
    stack: [
      'WordPress',
      'HTML5',
      'CSS3',
      'JavaScript',
      'CRM',
      'Google Workspace',
      'Reportes',
      'Administración Web',
    ],
  },
  {
  title: 'Desarrolladora Web',
  company: 'Conservatorio de las Rosas',
  period: 'Sep 2021 — Abr 2022',
  highlights: [
    'Desarrollo, mantenimiento y actualización de sitios web institucionales.',
    'Implementación de interfaces web utilizando HTML5, CSS3, JavaScript y WordPress.',
    'Optimización de la experiencia de usuario mediante mejoras visuales, funcionales y de navegación.',
    'Corrección de incidencias, mantenimiento evolutivo y soporte técnico de plataformas web.',
    'Colaboración con diferentes áreas para implementar nuevas funcionalidades y atender requerimientos del sitio.',
    'Aplicación de buenas prácticas de desarrollo web y mejora continua.',
  ],
  stack: [
    'HTML5',
    'CSS3',
    'JavaScript',
    'WordPress',
    'Responsive Design',
  ],
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
