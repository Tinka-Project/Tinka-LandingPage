import {
  Zap,
  Smartphone,
  Package,
  LineChart,
  Users,
  FileText,
  ArrowUpRight
} from 'lucide-react';

export function FeaturesSection() {
  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Zero-friction Sales Tracking',
      description: 'Record sales in seconds with our intuitive interface. No complex forms, just simple and fast entry.',
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: 'Banco FIE Integration (QR/Transfer)',
      description: 'Seamlessly accept payments through QR Pago Simple and bank transfers, all tracked automatically.',
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: 'Intelligent Inventory Control',
      description: 'Track your products, get low-stock alerts, and never miss a sale due to inventory issues.',
    },
    {
      icon: <LineChart className="w-6 h-6" />,
      title: 'Actionable Business Insights',
      description: 'Understand your business with real-time analytics, sales trends, and profit tracking.',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Secure User Management',
      description: 'Add team members, assign roles, and manage permissions with enterprise-grade security.',
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: 'Automated Digital Receipts',
      description: 'Generate professional receipts instantly and send them to customers via WhatsApp or email.',
    },
  ];

  return (
    <section id="features" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--fie-blue)] mb-4">
            Everything You Need to Grow Your Business
          </h2>
          <p className="text-lg text-gray-600">
            Powerful features designed specifically for Bolivian entrepreneurs and small business owners.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  icon,
  title,
  description
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="group relative bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:border-[var(--fie-orange)]/50 transition-all duration-300">
      <div className="absolute top-6 right-6 text-gray-400 group-hover:text-[var(--fie-orange)] transition-colors">
        <ArrowUpRight className="w-5 h-5" />
      </div>

      <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--fie-blue)] to-[var(--fie-blue-dark)] text-white mb-4">
        {icon}
      </div>

      <h3 className="text-xl font-semibold text-gray-900 mb-3">
        {title}
      </h3>

      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
