import { Sparkles, Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[var(--tinka-bg-deep)] border-t border-[var(--tinka-border)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Final CTA */}
        <div className="bg-gradient-to-br from-[var(--tinka-magenta)] via-purple-600 to-[var(--tinka-purple)] rounded-3xl p-12 mb-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50"></div>

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Únete a la Comunidad Tinka
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Miles de emprendedores bolivianos ya digitalizaron su negocio. Empieza gratis hoy y transforma tu cuaderno en una herramienta inteligente.
            </p>
            <button className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold bg-white text-[var(--tinka-magenta)] rounded-xl hover:bg-gray-100 transition-all duration-200 shadow-2xl transform hover:scale-105">
              <Sparkles className="w-5 h-5" />
              Comenzar Ahora - Es Gratis
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--tinka-magenta)] to-[var(--tinka-purple)]">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-bold text-lg text-[var(--tinka-text-primary)]">
                  Tinka Digital
                </div>
                <div className="text-xs text-[var(--tinka-text-secondary)]">
                  by Banco FIE
                </div>
              </div>
            </div>
            <p className="text-sm text-[var(--tinka-text-secondary)] mb-6">
              Empoderando a emprendedores bolivianos con tecnología de clase mundial.
            </p>
            <div className="flex gap-3">
              <SocialButton icon={<Instagram className="w-5 h-5" />} />
              <SocialButton icon={<Facebook className="w-5 h-5" />} />
              <SocialButton icon={<Twitter className="w-5 h-5" />} />
              <SocialButton icon={<Linkedin className="w-5 h-5" />} />
            </div>
          </div>

          {/* Producto */}
          <div>
            <h4 className="font-semibold text-[var(--tinka-text-primary)] mb-4">Producto</h4>
            <ul className="space-y-3">
              <FooterLink text="Funcionalidades" />
              <FooterLink text="Precios" />
              <FooterLink text="Integraciones" />
              <FooterLink text="Descargar App" />
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="font-semibold text-[var(--tinka-text-primary)] mb-4">Empresa</h4>
            <ul className="space-y-3">
              <FooterLink text="Sobre Nosotros" />
              <FooterLink text="Blog" />
              <FooterLink text="Casos de Éxito" />
              <FooterLink text="Contacto" />
            </ul>
          </div>

          {/* Soporte */}
          <div>
            <h4 className="font-semibold text-[var(--tinka-text-primary)] mb-4">Soporte</h4>
            <ul className="space-y-3">
              <FooterLink text="Centro de Ayuda" />
              <FooterLink text="Tutoriales" />
              <FooterLink text="FAQ" />
              <FooterLink text="API" />
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[var(--tinka-border)] pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-[var(--tinka-text-secondary)]">
              © 2026 Banco FIE. Todos los derechos reservados. Desarrollado para CochaTech 2026.
            </p>
            <div className="flex gap-6 text-sm text-[var(--tinka-text-secondary)]">
              <a href="#" className="hover:text-[var(--tinka-text-primary)] transition-colors">
                Privacidad
              </a>
              <a href="#" className="hover:text-[var(--tinka-text-primary)] transition-colors">
                Términos
              </a>
              <a href="#" className="hover:text-[var(--tinka-text-primary)] transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialButton({ icon }: { icon: React.ReactNode }) {
  return (
    <a
      href="#"
      className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 border border-[var(--tinka-border)] hover:bg-white/10 hover:border-[var(--tinka-magenta)]/50 transition-all duration-200 text-[var(--tinka-text-secondary)] hover:text-[var(--tinka-magenta)]"
    >
      {icon}
    </a>
  );
}

function FooterLink({ text }: { text: string }) {
  return (
    <li>
      <a
        href="#"
        className="text-sm text-[var(--tinka-text-secondary)] hover:text-[var(--tinka-text-primary)] transition-colors"
      >
        {text}
      </a>
    </li>
  );
}
