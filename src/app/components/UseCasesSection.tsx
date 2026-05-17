import { ShoppingBag, Scissors, Store } from 'lucide-react';

export function UseCasesSection() {
  return (
    <section id="success-stories" className="py-20 lg:py-28 bg-[var(--fie-gray)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Yellow Card - Why FIE Emprendedor */}
          <div className="lg:col-span-1 bg-gradient-to-br from-[var(--fie-yellow)] to-yellow-400 rounded-2xl p-8 flex flex-col justify-between min-h-[400px]">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Why FIE Emprendedor?
              </h2>
              <p className="text-gray-800 leading-relaxed">
                From local markets to tech-enabled services, FIE Emprendedor empowers every business. Register sales in seconds, access data-driven insights, and unlock credit opportunities directly through Banco FIE.
              </p>
            </div>
            <div className="mt-6">
              <div className="inline-flex items-center gap-2 text-gray-900 font-semibold">
                <span>Built for Bolivia</span>
                <span className="text-2xl">🇧🇴</span>
              </div>
            </div>
          </div>

          {/* Use Case Cards */}
          <UseCaseCard
            title="Comercios"
            icon={<ShoppingBag className="w-8 h-8" />}
            image="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80"
            businesses={[
              'Tiendas de ropa',
              'Tiendas de regalos',
              'Joyerías',
              'Librerías',
            ]}
          />

          <UseCaseCard
            title="Servicios"
            icon={<Scissors className="w-8 h-8" />}
            image="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80"
            businesses={[
              'Servicios de limpieza',
              'Salones de belleza',
              'Talleres mecánicos',
              'Servicios técnicos',
            ]}
          />

          <UseCaseCard
            title="Mercados"
            icon={<Store className="w-8 h-8" />}
            image="https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=800&q=80"
            businesses={[
              'Minimercados',
              'Frutas y verduras',
              'Panaderías',
              'Tiendas de abarrotes',
            ]}
          />
        </div>
      </div>
    </section>
  );
}

function UseCaseCard({
  title,
  icon,
  image,
  businesses
}: {
  title: string;
  icon: React.ReactNode;
  image: string;
  businesses: string[];
}) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3">
          <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/90 text-[var(--fie-blue)]">
            {icon}
          </div>
          <h3 className="text-2xl font-bold text-white">{title}</h3>
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <ul className="space-y-3 flex-1">
          {businesses.map((business, index) => (
            <li key={index} className="flex items-start gap-2">
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[var(--fie-orange)]/10 flex items-center justify-center mt-0.5">
                <div className="w-2 h-2 rounded-full bg-[var(--fie-orange)]"></div>
              </div>
              <span className="text-gray-700">{business}</span>
            </li>
          ))}
        </ul>

        <button className="mt-6 w-full py-3 px-4 bg-[var(--fie-blue)] text-white rounded-lg font-medium hover:bg-[var(--fie-blue-dark)] transition-colors">
          Explore Features
        </button>
      </div>
    </div>
  );
}
