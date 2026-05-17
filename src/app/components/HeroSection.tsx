import { Zap, TrendingUp, Shield, Sparkles } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-32">
      {/* Background Gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 -translate-x-1/2 w-96 h-96 bg-[var(--tinka-magenta)]/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-0 translate-x-1/2 w-96 h-96 bg-[var(--tinka-purple)]/20 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-[var(--tinka-border)] backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-[var(--tinka-magenta)]" />
            <span className="text-sm text-[var(--tinka-text-secondary)]">
              Desarrollado para CochaTech 2026 - Categoría Fintech
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
            <span className="text-[var(--tinka-text-primary)]">
              Del Cuaderno
            </span>
            <br />
            <span className="bg-gradient-to-r from-[var(--tinka-magenta)] to-[var(--tinka-purple)] bg-clip-text text-transparent">
              al Negocio Digital
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl lg:text-2xl text-[var(--tinka-text-secondary)] max-w-3xl mx-auto leading-relaxed">
            La herramienta más simple para emprendedores bolivianos. Registra ventas por voz, cobra con QR de Banco FIE y accede a microcréditos.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button className="w-full sm:w-auto px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-[var(--tinka-magenta)] to-[var(--tinka-purple)] rounded-xl hover:opacity-90 transition-all duration-200 shadow-2xl shadow-[var(--tinka-magenta)]/40">
              Empezar Ahora - Gratis
            </button>
            <button className="w-full sm:w-auto px-8 py-4 text-lg font-semibold text-[var(--tinka-text-primary)] border border-[var(--tinka-border)] rounded-xl hover:bg-white/5 transition-all duration-200">
              Ver Video Demo
            </button>
          </div>

          {/* Stats */}
          <div className="grid sm:grid-cols-3 gap-8 pt-12 max-w-3xl mx-auto">
            <StatCard
              icon={<Zap className="w-6 h-6" />}
              value="3 seg"
              label="Registro de venta"
            />
            <StatCard
              icon={<TrendingUp className="w-6 h-6" />}
              value="100%"
              label="Sincronización automática"
            />
            <StatCard
              icon={<Shield className="w-6 h-6" />}
              value="Offline"
              label="Funciona sin internet"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div className="flex flex-col items-center gap-2 p-6 rounded-2xl bg-white/5 border border-[var(--tinka-border)] backdrop-blur-sm">
      <div className="text-[var(--tinka-magenta)]">
        {icon}
      </div>
      <div className="text-2xl font-bold text-[var(--tinka-text-primary)]">
        {value}
      </div>
      <div className="text-sm text-[var(--tinka-text-secondary)]">
        {label}
      </div>
    </div>
  );
}
