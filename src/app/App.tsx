import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { FeatureDemo } from './components/FeatureDemo';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--tinka-bg-deep)]">
      <Header />
      <main>
        <HeroSection />

        {/* Feature Demos */}
        <FeatureDemo
          id="voice-input"
          title="Registro por Voz con IA"
          description="Olvídate del cuaderno. Solo di tu venta y la app la registra automáticamente con inteligencia artificial."
          features={[
            'Detección automática de producto, monto y método de pago',
            'Procesamiento en tiempo real',
            'Confirmación inteligente con datos pre-llenados',
          ]}
          videoPlaceholder="voice-demo"
          videoSrc="/voz.mov"
          align="left"
        />

        <FeatureDemo
          id="qr-payment"
          title="Cobranza por QR Banco FIE"
          description="Genera códigos QR al instante para cobrar con Banco FIE. Tus clientes pagan en segundos y tú recibes confirmación automática."
          features={[
            'QR dinámico con monto personalizado',
            'Timer de validez y notificación de pago recibido',
            'Compartir por WhatsApp directamente',
          ]}
          videoPlaceholder="qr-demo"
          videoSrc="/qr.mov"
          align="right"
        />

        <FeatureDemo
          id="bank-sync"
          title="Sincronización Automática BancaMovil FIE"
          description="Conecta tu cuenta de Banco FIE y todos tus ingresos y egresos se registran automáticamente. Cero trabajo manual."
          features={[
            'Detección automática de transferencias e ingresos',
            'Clasificación inteligente de gastos',
            'Notificaciones push en tiempo real',
          ]}
          videoPlaceholder="sync-demo"
          videoSrc="/sincronizacion.mov"
          align="left"
        />

        <FeatureDemo
          id="supplier-management"
          title="Gestión Inteligente de Proveedores"
          description="Evalúa a tus proveedores, compara precios y calidad, y toma mejores decisiones con datos reales."
          features={[
            'Evaluaciones mensuales automatizadas',
            'Comparativa de costo, tiempo y calidad',
            'Recomendaciones basadas en IA',
          ]}
          videoPlaceholder="supplier-demo"
          videoSrc="/prov.mov"
          align="right"
        />

        <FeatureDemo
          id="business-intelligence"
          title="Inteligencia de Negocios con IA"
          description="Descubre patrones en tus ventas, identifica tu producto estrella y recibe recomendaciones para vender más."
          features={[
            'Proyecciones automáticas de ventas',
            'Análisis de productos más rentables',
            'Insights accionables sobre horarios y días pico',
          ]}
          videoPlaceholder="bi-demo"
          videoSrc="/int.mov"
          align="left"
        />

        <FeatureDemo
          id="tinka-score"
          title="Tinka Score y Gamificación"
          description="Aumenta tu puntaje crediticio mientras registras ventas. Desbloquea logros y accede a microcréditos pre-aprobados."
          features={[
            'Score crediticio en tiempo real',
            'Sistema de logros y badges desbloqueables',
            'Acceso a microcréditos según tu actividad',
          ]}
          videoPlaceholder="score-demo"
          videoSrc="/score.mov"
          align="right"
        />

        <FeatureDemo
          id="reports"
          title="Reportes Visuales en Tiempo Real"
          description="Gráficos interactivos que muestran tus ventas por día, método de pago, categoría y más. Todo en una sola pantalla."
          features={[
            'Gráficos de evolución de ingresos',
            'Distribución por métodos de pago',
            'Exportación a PDF y Excel',
          ]}
          videoPlaceholder="reports-demo"
          videoSrc="/rep.mov"
          align="left"
        />

        <FeatureDemo
          id="offline"
          title="Registros Manuales de Ingresos/Egresos y Presupuestos"
          description="Registra ventas sin conexión y sincroniza automáticamente cuando vuelvas a tener internet. Siempre disponible."
          features={[
            'Modo offline completo',
            'Sincronización automática en segundo plano',
            'Instalable como app nativa',
          ]}
          videoPlaceholder="offline-demo"
          videoSrc="/man.mov"
          align="right"
        />
      </main>
      <Footer />
    </div>
  );
}
