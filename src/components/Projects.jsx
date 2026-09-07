import { ExternalLink, GitFork } from "lucide-react";

const projects = [
  {
  title: 'ERP Empresarial Multiempresa',
  image: `${import.meta.env.BASE_URL}images/erp.png`,
  desc: 'Participé en el diseño, desarrollo y mantenimiento de un sistema ERP empresarial multiempresa, implementando soluciones Full Stack para optimizar procesos administrativos y operativos. Colaboré en el análisis de requerimientos, desarrollo de módulos para compras, ventas, inventarios, clientes, proveedores y recursos humanos, así como en la creación de interfaces web responsivas, integración de APIs internas, optimización de consultas SQL, generación de documentos PDF y mejora continua de la plataforma.',
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
    'Git'
  ],
  demo: null,
  github: null,
  featured: true,
},

{
  title: 'Invitaciones Digitales (SaaS)',
  image: `${import.meta.env.BASE_URL}images/invitaciones.png`,
  desc: 'Desarrollo de una plataforma SaaS para la creación y gestión de invitaciones digitales personalizadas con URLs únicas para cada evento. Implementé arquitectura Full Stack con Laravel, Inertia y React, incluyendo confirmación de asistencia (RSVP), panel administrativo, gestión de invitados, diseño responsive y una estructura preparada para comercializar invitaciones mediante subdominios y slugs personalizados.',
  stack: [
    'Laravel',
    'React',
    'Inertia',
    'TypeScript',
    'PHP',
    'MySQL',
    'Tailwind CSS',
    'Vite',
    'REST APIs',
  ],
  demo: 'https://TU-URL.com',
  github: null,
  featured: true,
},

{
  title: 'Mañana Rica',
  image: `${import.meta.env.BASE_URL}images/mananarica.png`,
  desc: 'Diseño y desarrollo del sitio web para una marca de desayunos sorpresa, enfocado en conversión y experiencia de usuario. Implementé una interfaz moderna y responsive con selección de paquetes, extras personalizados, flujo de pedido mediante WhatsApp, optimización visual y una estructura preparada para futuras integraciones de pagos y administración de pedidos.',
  stack: [
    'React',
    'JavaScript',
    'Tailwind CSS',
    'HTML5',
    'CSS3',
    'UX/UI',
    'Responsive Design',
  ],
  demo: 'https://TU-URL-MANANARICA.com',
  github: null,
},

  {
  title: 'Plataformas Digitales Institucionales',
  image: `${import.meta.env.BASE_URL}images/liceo.png`,
  desc: 'Administración, mantenimiento y mejora continua de plataformas digitales orientadas a procesos académicos y administrativos. Participé en la optimización de sitios web, gestión de CRM institucional, automatización de procesos, análisis de información y desarrollo de mejoras funcionales para optimizar la experiencia de usuarios y la gestión institucional.',
  stack: [
    'WordPress',
    'HTML5',
    'CSS3',
    'JavaScript',
    'CRM',
    'UX/UI',
  ],
  demo: 'https://www.liceomichoacano.edu.mx/',
  github: null,
},

 {
  title: 'LIQ Cursos',
  image: `${import.meta.env.BASE_URL}images/liq.png`,
  desc: 'Desarrollo, mantenimiento y actualización de un sitio web corporativo enfocado en la promoción de cursos y servicios digitales. Implementación de mejoras funcionales, optimización de contenido y mantenimiento continuo de la plataforma para mejorar la experiencia del usuario.',
  stack: [
    'WordPress',
    'PHP',
    'HTML5',
    'CSS3',
    'JavaScript',
  ],
  demo: 'https://liq.com.mx/',
  github: null,
},

  {
  title: 'Cumbre Clima',
  image: `${import.meta.env.BASE_URL}images/cumbreclima.png`,
  desc: 'Participación en el desarrollo, mantenimiento y actualización del sitio web institucional, implementando mejoras funcionales y optimizando la presentación del contenido para ofrecer una mejor experiencia de navegación.',
  stack: [
    'WordPress',
    'HTML5',
    'CSS3',
    'JavaScript',
  ],
  demo: 'https://cumbreclima.com.mx/',
  github: null,
},

  {
  title: 'Conservatorio de las Rosas',
  image: `${import.meta.env.BASE_URL}images/conservatorio.png`,
  desc: 'Desarrollo, mantenimiento y mejora continua de plataformas web institucionales, implementando nuevas funcionalidades, optimizando contenido y colaborando con distintas áreas para atender requerimientos y mejorar la experiencia de usuario.',
  stack: [
    'WordPress',
    'HTML5',
    'CSS3',
    'JavaScript',
  ],
  demo: 'https://www.conservatoriodelasrosas.edu.mx/Web/',
  github: null,
},
 {
  title: 'Sitio Web Corporativo',
  image: `${import.meta.env.BASE_URL}images/conti.png`,
  desc: 'Participación en el desarrollo, mantenimiento y evolución del sitio web corporativo, colaborando en la implementación de interfaces web, funcionalidades dinámicas y mejoras continuas para fortalecer la presencia digital de la empresa.',
  stack: [
    'PHP',
    'HTML5',
    'CSS3',
    'JavaScript',
    'Responsive Design',
  ],
  demo: 'https://contipapelerias.com.mx/',
  github: null,
},
{
  title: 'Portafolio Profesional',
  image: `${import.meta.env.BASE_URL}images/portafolio.png`,
  desc: 'Portafolio web desarrollado para presentar mi experiencia profesional, proyectos, tecnologías y habilidades como desarrolladora Full Stack. Construido con React y enfocado en una interfaz moderna, responsiva y optimizada para reclutadores y empresas.',
  stack: [
    'React',
    'JavaScript (ES6+)',
    'HTML5',
    'CSS3',
    'Tailwind CSS',
    'Vite',
  ],
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
                {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-muted hover:text-text text-sm transition-colors"
                    >
                      <GitFork size={15} />
                      Código
                    </a>
                  )}
                {p.demo && (
  <a
    href={p.demo}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-1.5 text-accent hover:text-accent/70 text-sm transition-colors"
  >
    <ExternalLink size={15} />
    Demo
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
