import Navbar    from './components/Navbar'
import Hero      from './components/Hero'
import Experience from './components/Experience'
import Projects  from './components/Projects'
import Skills    from './components/Skills'
import Contact   from './components/Contact'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="border-t border-border py-6 text-center text-muted text-xs font-mono">
        © {new Date().getFullYear()} Jazmin — Construido con React + Vite
      </footer>
    </>
  )
}
