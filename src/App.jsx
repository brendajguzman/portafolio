import Navbar    from './components/Navbar'
import Hero      from './components/Hero'
import Experience from './components/Experience'
import Skills    from './components/Skills'
import Projects  from './components/Projects'
import Contact   from './components/Contact'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <footer className="border-t border-border py-6 text-center text-muted text-xs font-mono">
        © {new Date().getFullYear()} Jazmin — Construido con React + Vite
      </footer>
    </>
  )
}
