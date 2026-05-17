import { ArrowRight, Smartphone, QrCode, Building2, CheckCircle2 } from 'lucide-react';

export function IntegrationSection() {
  return (
    <section id="integration" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--fie-blue)] mb-4">
            Integrated to Banco FIE Ecosystem
          </h2>
          <p className="text-lg text-gray-600">
            Sync your digital sales records directly with your bank account for a complete financial view and streamlined credit applications.
          </p>
        </div>

        {/* Integration Flow Diagram */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* FIE Emprendedor App */}
            <IntegrationCard
              icon={<Smartphone className="w-10 h-10" />}
              title="FIE Emprendedor"
              description="Track all your sales and business operations"
              color="from-[var(--fie-blue)] to-[var(--fie-blue-dark)]"
              features={[
                'Sales tracking',
                'Inventory management',
                'Business analytics',
              ]}
            />

            {/* Arrow */}
            <div className="hidden md:flex items-center justify-center">
              <div className="flex items-center gap-2">
                <div className="flex-1 h-0.5 bg-gradient-to-r from-[var(--fie-blue)] to-[var(--fie-orange)]"></div>
                <ArrowRight className="w-8 h-8 text-[var(--fie-orange)]" />
              </div>
            </div>

            {/* Pago Simple QR */}
            <IntegrationCard
              icon={<QrCode className="w-10 h-10" />}
              title="Pago Simple QR"
              description="Accept instant payments from customers"
              color="from-[var(--fie-orange)] to-[var(--fie-orange-dark)]"
              features={[
                'QR code payments',
                'Instant transfers',
                'Payment confirmations',
              ]}
            />
          </div>

          {/* Central Integration Point */}
          <div className="mt-12 relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-8 hidden md:block">
              <div className="flex flex-col items-center gap-2">
                <div className="w-0.5 h-12 bg-gradient-to-b from-[var(--fie-orange)] to-[var(--fie-blue)]"></div>
                <div className="w-8 h-8 rounded-full bg-[var(--fie-orange)] flex items-center justify-center">
                  <ArrowRight className="w-5 h-5 text-white rotate-90" />
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[var(--fie-blue)] to-[var(--fie-blue-dark)] rounded-2xl p-8 md:p-12 text-white shadow-2xl">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0 w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                  <Building2 className="w-12 h-12" />
                </div>

                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold mb-3">Banco FIE Mobile Banking</h3>
                  <p className="text-white/90 text-lg mb-6">
                    All your business data syncs automatically with your bank account, giving you a complete financial picture and facilitating access to business credit.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4">
                    <BenefitBadge text="Complete visibility" />
                    <BenefitBadge text="Credit access" />
                    <BenefitBadge text="Financial control" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            <BenefitCard
              title="Real-time Sync"
              description="Your sales data automatically appears in your bank account view, no manual entry needed."
            />
            <BenefitCard
              title="Credit Opportunities"
              description="Digital sales records help Banco FIE understand your business and offer tailored credit products."
            />
            <BenefitCard
              title="Complete Ecosystem"
              description="From sale to bank deposit, everything connected in one seamless experience."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function IntegrationCard({
  icon,
  title,
  description,
  color,
  features
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  features: string[];
}) {
  return (
    <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300">
      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${color} text-white mb-4`}>
        {icon}
      </div>

      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>

      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2 text-sm text-gray-700">
            <CheckCircle2 className="w-4 h-4 text-[var(--fie-orange)] flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function BenefitBadge({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2 backdrop-blur-sm">
      <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
      <span className="text-sm font-medium">{text}</span>
    </div>
  );
}

function BenefitCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-[var(--fie-gray)] rounded-xl p-6">
      <h4 className="text-lg font-semibold text-gray-900 mb-2">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
