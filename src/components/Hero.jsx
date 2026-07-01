import { useEffect, useState } from 'react'

const ROLES = [
  'Full Stack Developer',
  'Desarrolladora Web',
  'PHP Developer',
  'JavaScript Engineer',
  'Backend Developer',
  'Arquitectura Web',
]

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const target = ROLES[roleIdx]
    let timeout

    if (!deleting && displayed.length < target.length) {
      timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 70)
    } else if (!deleting && displayed.length === target.length) {
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setRoleIdx((roleIdx + 1) % ROLES.length)
    }
    return () => clearTimeout(timeout)
  }, [displayed, deleting, roleIdx])

  return (
    <section id="sobre-mí" className="min-h-screen flex items-center pt-14">
      <div className="max-w-5xl mx-auto px-6 py-24">
        {/* Terminal window */}
        <div className="bg-surface border border-border rounded-xl p-6 mb-12 max-w-lg font-mono text-sm">
          <div className="flex gap-2 mb-4">
            <span className="w-3 h-3 rounded-full bg-red-500/70"/>
            <span className="w-3 h-3 rounded-full bg-yellow-500/70"/>
            <span className="w-3 h-3 rounded-full bg-green-500/70"/>
          </div>
          <p className="text-muted">$ whoami</p>
          <p className="text-accent mt-1">Brenda Guzmán</p>
          <p className="text-muted mt-3">$ cat role.txt</p>
          <p className="text-text mt-1">
            {displayed}<span className="cursor text-accent">▋</span>
          </p>
        </div>

        <div className="fade-up">
          <p className="text-accent text-sm font-display tracking-widest uppercase mb-3">
            Hola, soy
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-text leading-none mb-6">
            Brenda Jazmín
            <br />
            <span className="text-primary">
              Full Stack Developer
            </span>
          </h1>
          <p className="text-muted text-lg max-w-xl leading-relaxed mb-10">
           Desarrolladora Web Full Stack con experiencia en aplicaciones empresariales y 
           desarrollo de sitios web. Ingeniera en Tecnologías de la Información y Comunicaciones
            con especialidad en Arquitectura Web. Experiencia en PHP, JavaScript (ES6), MySQL, WordPress, React e integración de APIs.
             Interesada en el desarrollo de interfaces, experiencia de usuario y tecnologías web modernas.
          </p>
          <div className="flex flex-wrap gap-2 mb-10">
            {[
              'PHP',
              'JavaScript',
              'MySQL',
              'React',
              'Git',
              'MVC',
              'WordPress'
            ].map((tech) => (
              <span key={tech} className="px-3 py-1 text-sm rounded-full border border-border">
                {tech}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            <a href="#proyectos" className="bg-primary hover:bg-primary/80 text-white font-display font-semibold px-6 py-3 rounded-lg transition-colors">
              Ver proyectos
            </a>
            <a
              href={`${import.meta.env.BASE_URL}CV_Brenda_Guzman_FullStack.pdf`}
              target="_blank"
              rel="noreferrer"
              className="border border-border hover:border-accent text-text font-display font-semibold px-6 py-3 rounded-lg transition-colors">
              Descargar CV
            </a>
            <a href="#contacto"
              className="border border-border hover:border-accent text-text font-display font-semibold px-6 py-3 rounded-lg transition-colors">
              Contacto
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
