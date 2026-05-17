import { Sparkles } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--tinka-border)] bg-[var(--tinka-bg-deep)]/80 backdrop-blur-xl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
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

          {/* CTA */}
          <div className="flex items-center gap-3">
            <button className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-[var(--tinka-text-primary)] border border-[var(--tinka-border)] rounded-xl hover:bg-white/5 transition-all duration-200">
              Ver Demo
            </button>
            <button className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-[var(--tinka-magenta)] to-[var(--tinka-purple)] rounded-xl hover:opacity-90 transition-all duration-200 shadow-lg shadow-[var(--tinka-magenta)]/25">
              Probar Gratis
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
