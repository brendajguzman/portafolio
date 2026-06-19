import { ExternalLink, GitFork } from "lucide-react";

const projects = [
  {
    title: 'ERP Empresarial Multiempresas',
    image: `${import.meta.env.BASE_URL}images/erp.png`,
    desc: 'Desarrollo y mantenimiento de un sistema ERP empresarial utilizado por distintas áreas de la organización. Participé en el análisis de requerimientos, diseño e implementación de módulos para ventas, clientes, inventarios, almacenes y procesos administrativos. Colaboré en el desarrollo de interfaces, lógica de negocio, consultas SQL, APIs internas, generación de tickets y documentos PDF, así como en la optimización de procesos y herramientas para mejorar la operación diaria de los usuarios.',
    stack: ['PHP', 'JavaScript', 'MySQL', 'MVC', 'Git'],
    demo: null,
    github: null,
    featured: true,
  },

  {
    title: 'Liceo Michoacano',
    image: `${import.meta.env.BASE_URL}images/liceo.png`,
    desc: 'Administración y mejora de plataformas digitales enfocadas en procesos de inscripción, captación y seguimiento de prospectos.',
    stack: ['WordPress', 'CRM', 'HTML', 'CSS'],
    demo: 'https://www.liceomichoacano.edu.mx/',
    github: null,
  },

  {
    title: 'LIQ Cursos',
    image: `${import.meta.env.BASE_URL}images/liq.png`,
    desc: 'Desarrollo y mantenimiento de sitio corporativo, optimización de contenido y mejoras funcionales de diferentes cursos.',
    stack: ['WordPress', 'PHP', 'CSS'],
    demo: 'https://liq.com.mx/',
    github: null,
  },

  {
    title: 'Cumbre Clima',
    image: `${import.meta.env.BASE_URL}images/cumbreclima.png`,
    desc: 'Participación en la implementación y mantenimiento de sitio web institucional.',
    stack: ['WordPress', 'JavaScript', 'CSS'],
    demo: 'https://cumbreclima.com.mx/',
    github: null,
  },

  {
    title: 'Conservatorio de las Rosas',
    image: `${import.meta.env.BASE_URL}images/conservatorio.png`,
    desc: 'Mantenimiento y actualización de plataformas web institucionales.',
    stack: ['WordPress', 'HTML', 'CSS', 'JavaScript'],
    demo: 'https://www.conservatoriodelasrosas.edu.mx/Web/',
    github: null,
  },
  {
  title: 'Sitio Web Corporativo - Coorporativo Jacc',
  image: `${import.meta.env.BASE_URL}images/conti.png`,
  desc: 'Participación en el desarrollo y mantenimiento del sitio web corporativo de Conti Papelerías, colaborando en la implementación de interfaces y funcionalidades con PHP, HTML, CSS y JavaScript.',
  stack: ['PHP', 'HTML', 'CSS', 'JavaScript'],
  demo: 'https://contipapelerias.com.mx/',
  github: null,
},
 {
    title: 'Portafolio Personal',
    image: `${import.meta.env.BASE_URL}images/portafolio.png`,
    desc: 'Portafolio desarrollado con React para mostrar experiencia profesional, proyectos y tecnologías.',
    stack: ['React', 'JavaScript', 'Tailwind'],
    demo: '#',
    github: 'https://github.com/brendajguzman',
  },
]
export default function Projects() {
  return (
    <section id="proyectos" className="py-24 bg-surface/30">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="font-display text-3xl font-bold text-text mb-2">Proyectos</h2>
        <div className="w-10 h-1 bg-primary rounded mb-12" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div key={i} className="project-card bg-surface rounded-xl p-6 flex flex-col">
              {p.image && (
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                )}

              <h3 className="font-display font-semibold text-text text-lg mb-2">{p.title}</h3>
              <p className="text-text/70 text-sm leading-relaxed flex-1 mb-4">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {p.stack.map(t => <span key={t} className="pill">{t}</span>)}
              </div>
              <div className="flex gap-4 mt-auto">
                <a href={p.github} className="flex items-center gap-1.5 text-muted hover:text-text text-sm transition-colors">
                  <GitFork size={15}/> Código
                </a>
                {p.demo && (
                  <a href={p.demo} className="flex items-center gap-1.5 text-accent hover:text-accent/70 text-sm transition-colors">
                    <ExternalLink size={15}/> Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
