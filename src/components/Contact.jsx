import { Mail, GitFork, Link } from "lucide-react";
export default function Contact() {
  return (
    <section id="contacto" className="py-24 bg-surface/30">
      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2 className="font-display text-3xl font-bold text-text mb-2">
          Contacto
        </h2>

        <div className="w-10 h-1 bg-primary rounded mx-auto mb-6" />

        <p className="text-muted max-w-md mx-auto mb-10 leading-relaxed">
          Actualmente me encuentro abierta a nuevas oportunidades como
          Full Stack Developer, Desarrolladora Web o posiciones relacionadas
          con sistemas empresariales y desarrollo de software.
        </p>

        <a
          href="mailto:bjgd04@gmail.com"
          className="inline-flex items-center gap-2 bg-primary hover:bg-primary/80 text-white font-display font-semibold px-8 py-3 rounded-lg transition-colors mb-12"
        >
          <Mail size={18} />
          bjgd04@gmail.com
        </a>

        <div className="flex justify-center gap-8">

          <a
            href="https://github.com/brendajguzman"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-muted hover:text-text transition-colors text-sm"
          >
            <GitFork size={18} />
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/brenda-jazmin-guzman"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-muted hover:text-text transition-colors text-sm"
          >
            <Link size={18} />
            LinkedIn
          </a>

        </div>
      </div>
    </section>
  );
}