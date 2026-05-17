import { Check, Play, Pause, Volume2, Maximize2 } from 'lucide-react';
import { useState } from 'react';

interface FeatureDemoProps {
  id: string;
  title: string;
  description: string;
  features: string[];
  videoPlaceholder: string;
  align: 'left' | 'right';
}

export function FeatureDemo({
  id,
  title,
  description,
  features,
  videoPlaceholder,
  align
}: FeatureDemoProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id={id} className="py-20 lg:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${align === 'right' ? 'lg:flex-row-reverse' : ''}`}>
          {/* Content Side */}
          <div className={`space-y-6 ${align === 'right' ? 'lg:order-2' : ''}`}>
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--tinka-text-primary)] leading-tight">
                {title}
              </h2>
              <p className="text-lg text-[var(--tinka-text-secondary)] leading-relaxed">
                {description}
              </p>
            </div>

            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-[var(--tinka-magenta)] to-[var(--tinka-purple)] flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-[var(--tinka-text-secondary)] leading-relaxed">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* iPhone Mockup Side */}
          <div className={`flex justify-center ${align === 'right' ? 'lg:order-1' : ''}`}>
            <IPhoneMockup
              videoPlaceholder={videoPlaceholder}
              isPlaying={isPlaying}
              onPlayPause={() => setIsPlaying(!isPlaying)}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function IPhoneMockup({
  videoPlaceholder,
  isPlaying,
  onPlayPause
}: {
  videoPlaceholder: string;
  isPlaying: boolean;
  onPlayPause: () => void;
}) {
  return (
    <div className="relative group">
      {/* iPhone 13 Pro Max Frame */}
      <div className="relative w-[340px] h-[694px] bg-[#1a1a1a] rounded-[56px] shadow-2xl border-[14px] border-[#1a1a1a] overflow-hidden">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[160px] h-[32px] bg-[#1a1a1a] rounded-b-3xl z-10"></div>

        {/* Screen */}
        <div className="relative w-full h-full bg-[var(--tinka-bg-deep)] overflow-hidden">
          {/* Video Placeholder Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <VideoPlaceholder videoPlaceholder={videoPlaceholder} />
          </div>

          {/* Play Button Overlay */}
          <button
            onClick={onPlayPause}
            className="absolute inset-0 flex items-center justify-center z-20 bg-black/30 backdrop-blur-sm group-hover:bg-black/40 transition-all duration-300"
          >
            <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-2xl">
              {isPlaying ? (
                <Pause className="w-10 h-10 text-white" />
              ) : (
                <Play className="w-10 h-10 text-white ml-1" />
              )}
            </div>
          </button>

          {/* Video Controls */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent z-10">
            <div className="space-y-2">
              {/* Progress Bar */}
              <div className="relative h-1 bg-white/20 rounded-full overflow-hidden">
                <div
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-[var(--tinka-magenta)] to-[var(--tinka-purple)] rounded-full transition-all duration-300"
                  style={{ width: isPlaying ? '40%' : '0%' }}
                ></div>
              </div>

              {/* Control Buttons */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <button className="text-white/80 hover:text-white transition-colors">
                    <Volume2 className="w-4 h-4" />
                  </button>
                  <span className="text-xs text-white/60">
                    {isPlaying ? '0:08' : '0:00'} / 0:30
                  </span>
                </div>
                <button className="text-white/80 hover:text-white transition-colors">
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-[56px] bg-gradient-to-br from-[var(--tinka-magenta)]/20 to-[var(--tinka-purple)]/20 blur-2xl -z-10 opacity-50"></div>
    </div>
  );
}

function VideoPlaceholder({ videoPlaceholder }: { videoPlaceholder: string }) {
  const placeholders: Record<string, JSX.Element> = {
    'voice-demo': <VoiceDemo />,
    'qr-demo': <QRDemo />,
    'sync-demo': <SyncDemo />,
    'supplier-demo': <SupplierDemo />,
    'bi-demo': <BIDemo />,
    'score-demo': <ScoreDemo />,
    'reports-demo': <ReportsDemo />,
    'offline-demo': <OfflineDemo />,
  };

  return placeholders[videoPlaceholder] || <VoiceDemo />;
}

function VoiceDemo() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-purple-900 via-fuchsia-900 to-pink-900 flex flex-col items-center justify-center p-8">
      <div className="relative">
        {/* Audio Waves Animation */}
        <div className="flex items-center gap-2 mb-8">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-2 bg-white/80 rounded-full animate-pulse"
              style={{
                height: `${30 + i * 15}px`,
                animationDelay: `${i * 0.1}s`,
              }}
            ></div>
          ))}
        </div>

        <div className="text-center space-y-4">
          <div className="text-white/60 text-sm">Escuchando...</div>
          <div className="text-white font-medium text-base px-4">
            "Vendí 2 billeteras<br />a 150 Bs por QR"
          </div>
        </div>
      </div>
    </div>
  );
}

function QRDemo() {
  return (
    <div className="w-full h-full bg-[var(--tinka-bg-deep)] flex flex-col items-center justify-center p-8">
      <div className="bg-white p-6 rounded-2xl mb-4">
        <div className="w-40 h-40 bg-black grid grid-cols-8 gap-0.5">
          {[...Array(64)].map((_, i) => (
            <div
              key={i}
              className={`${Math.random() > 0.5 ? 'bg-white' : 'bg-black'}`}
            ></div>
          ))}
        </div>
      </div>
      <div className="text-4xl font-bold text-white mb-2">Bs. 450.00</div>
      <div className="text-sm text-white/60">⏱️ Válido por: 4:32</div>
    </div>
  );
}

function SyncDemo() {
  return (
    <div className="w-full h-full bg-[var(--tinka-bg-deep)] flex flex-col items-center justify-center p-8">
      <div className="w-full space-y-4">
        <div className="flex items-center gap-2 text-[var(--tinka-success)] text-sm mb-6">
          <div className="w-2 h-2 rounded-full bg-[var(--tinka-success)] animate-pulse"></div>
          Conectado a BancaMovil FIE
        </div>

        <div className="bg-[var(--tinka-bg-card)] rounded-xl p-4 border border-green-500/20">
          <div className="text-xs text-white/60 mb-1">Nuevo ingreso detectado</div>
          <div className="text-lg font-bold text-[var(--tinka-success)]">+150 Bs</div>
          <div className="text-xs text-white/60 mt-1">Transferencia - Juan Pérez</div>
        </div>

        <div className="bg-[var(--tinka-bg-card)] rounded-xl p-4 border border-red-500/20">
          <div className="text-xs text-white/60 mb-1">Nuevo gasto detectado</div>
          <div className="text-lg font-bold text-[var(--tinka-danger)]">-320 Bs</div>
          <div className="text-xs text-white/60 mt-1">Pago - Textiles S.A.</div>
        </div>
      </div>
    </div>
  );
}

function SupplierDemo() {
  return (
    <div className="w-full h-full bg-[var(--tinka-bg-deep)] flex flex-col justify-center p-6">
      <div className="bg-[var(--tinka-bg-card)] rounded-xl p-4 mb-3 border border-[var(--tinka-border)]">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--tinka-magenta)] to-[var(--tinka-purple)]"></div>
          <div>
            <div className="text-white font-medium text-sm">Textiles Andinos</div>
            <div className="text-xs text-white/60">Score: 92/100</div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 text-center">
          <div>
            <div className="text-xs text-white/60">Calidad</div>
            <div className="text-sm font-bold text-[var(--tinka-success)]">5.0</div>
          </div>
          <div>
            <div className="text-xs text-white/60">Tiempo</div>
            <div className="text-sm font-bold text-[var(--tinka-success)]">4.8</div>
          </div>
          <div>
            <div className="text-xs text-white/60">Precio</div>
            <div className="text-sm font-bold text-[var(--tinka-success)]">4.5</div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-[var(--tinka-magenta)]/20 to-[var(--tinka-purple)]/20 rounded-xl p-4 border border-[var(--tinka-magenta)]/30">
        <div className="text-xs text-white/80">🤖 Recomendación IA</div>
        <div className="text-sm text-white mt-1">Mejor relación costo-calidad</div>
      </div>
    </div>
  );
}

function BIDemo() {
  return (
    <div className="w-full h-full bg-[var(--tinka-bg-deep)] flex flex-col justify-center p-6">
      <div className="space-y-3">
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl p-4 border border-purple-500/30">
          <div className="text-xs text-white/60 mb-1">Proyección del Mes</div>
          <div className="text-xl font-bold text-white">Bs. 12,500</div>
          <div className="text-xs text-[var(--tinka-success)] mt-1">↗ Meta: 15,000 Bs (83%)</div>
        </div>

        <div className="bg-[var(--tinka-bg-card)] rounded-xl p-4 border border-[var(--tinka-border)]">
          <div className="text-xs text-white/60 mb-2">🌟 Producto Estrella</div>
          <div className="text-sm font-medium text-white">Billetera de Cuero</div>
          <div className="text-xs text-[var(--tinka-success)] mt-1">Margen: 65%</div>
        </div>

        <div className="bg-[var(--tinka-bg-card)] rounded-xl p-4 border border-[var(--tinka-border)]">
          <div className="text-xs text-white/60 mb-2">📊 Patrón Detectado</div>
          <div className="text-sm text-white">Sábados 10am-2pm</div>
          <div className="text-xs text-white/60 mt-1">Horario pico de ventas</div>
        </div>
      </div>
    </div>
  );
}

function ScoreDemo() {
  return (
    <div className="w-full h-full bg-[var(--tinka-bg-deep)] flex flex-col items-center justify-center p-8">
      <div className="relative w-40 h-40 mb-6">
        <svg className="transform -rotate-90 w-40 h-40">
          <circle
            cx="80"
            cy="80"
            r="70"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="12"
            fill="none"
          />
          <circle
            cx="80"
            cy="80"
            r="70"
            stroke="url(#gradient)"
            strokeWidth="12"
            fill="none"
            strokeDasharray="440"
            strokeDashoffset="66"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#d946ef" />
              <stop offset="100%" stopColor="#9333ea" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="text-4xl font-bold text-white">85</div>
          <div className="text-xs text-white/60">Score</div>
        </div>
      </div>

      <div className="text-center">
        <div className="text-sm font-medium text-white mb-2">¡Casi Diamante! 💎</div>
        <div className="bg-gradient-to-r from-[var(--tinka-magenta)] to-[var(--tinka-purple)] rounded-lg px-4 py-2 text-xs text-white">
          Pre-aprobado: Bs. 5,000
        </div>
      </div>
    </div>
  );
}

function ReportsDemo() {
  return (
    <div className="w-full h-full bg-[var(--tinka-bg-deep)] flex flex-col justify-center p-6">
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-gradient-to-br from-[var(--tinka-magenta)] to-[var(--tinka-purple)] rounded-xl p-3">
            <div className="text-xs text-white/80">Ventas Hoy</div>
            <div className="text-xl font-bold text-white">Bs. 1,250</div>
            <div className="text-xs text-white/70">↗ +18%</div>
          </div>
          <div className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl p-3">
            <div className="text-xs text-white/80">Semana</div>
            <div className="text-xl font-bold text-white">Bs. 8,400</div>
            <div className="text-xs text-white/70">142 ventas</div>
          </div>
        </div>

        <div className="bg-[var(--tinka-bg-card)] rounded-xl p-3 border border-[var(--tinka-border)]">
          <div className="text-xs text-white/60 mb-2">Métodos de Pago</div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-[var(--tinka-magenta)] rounded-full" style={{ width: '45%' }}></div>
              </div>
              <span className="text-xs text-white/60">45% QR</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-[var(--tinka-success)] rounded-full" style={{ width: '35%' }}></div>
              </div>
              <span className="text-xs text-white/60">35% Efectivo</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function OfflineDemo() {
  return (
    <div className="w-full h-full bg-[var(--tinka-bg-deep)] flex flex-col items-center justify-center p-8">
      <div className="text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/20 border border-amber-500/30 rounded-full">
          <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></div>
          <span className="text-sm text-amber-300">Sin conexión</span>
        </div>

        <div className="space-y-3">
          <div className="bg-[var(--tinka-bg-card)] rounded-xl p-4 border border-[var(--tinka-border)]">
            <div className="text-xs text-white/60 mb-2">Ventas Pendientes</div>
            <div className="text-2xl font-bold text-white">3</div>
          </div>

          <div className="bg-gradient-to-r from-[var(--tinka-success)]/20 to-emerald-600/20 rounded-xl p-4 border border-[var(--tinka-success)]/30">
            <div className="text-xs text-white/80 mb-1">✓ Se sincronizarán automáticamente</div>
            <div className="text-xs text-white/60">Cuando vuelvas a tener internet</div>
          </div>
        </div>
      </div>
    </div>
  );
}
