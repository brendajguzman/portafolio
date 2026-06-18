export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur border-b border-border">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <span className="font-display font-semibold text-accent text-sm tracking-widest uppercase">
          brendajaz.dev
        </span>
        <div className="flex gap-8 text-sm">
          {['sobre-mí','experiencia','proyectos','habilidades','contacto'].map(s => (
            <a key={s} href={`#${s}`} className="nav-link capitalize hidden sm:block">{s.replace('-',' ')}</a>
          ))}
        </div>
      </div>
    </nav>
  )
}
