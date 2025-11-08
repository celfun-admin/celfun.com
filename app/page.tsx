

import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Celfun | Accesorios para Celular",
  description: "Compra fundas, cargadores, audífonos y más accesorios para tu celular en Celfun. Envíos rápidos y atención personalizada.",
  keywords: [
    "accesorios para celular",
    "fundas",
    "cargadores",
    "audífonos",
    "tienda de celulares",
    "Celfun"
  ],
  openGraph: {
    title: "Celfun | Accesorios para Celular",
    description: "Compra fundas, cargadores, audífonos y más accesorios para tu celular en Celfun.",
    url: "https://celfun.com/",
    siteName: "Celfun",
    images: [
      {
        url: "/logo.svg",
        width: 120,
        height: 120,
        alt: "Accesorios para celular Celfun"
      }
    ],
    locale: "es_MX",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Celfun | Accesorios para Celular",
    description: "Compra fundas, cargadores, audífonos y más accesorios para tu celular en Celfun.",
    site: "@celfunmx"
  }
};

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="w-full py-16 px-4 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Bienvenido a Celfun</h1>
        <p className="text-lg md:text-xl mb-6">Tu tienda de accesorios para celular: fundas, cargadores, audífonos y más.</p>
        <div className="flex flex-col sm:flex-row gap-4 mb-4">
          <a 
            href="https://wa.me/527773142332?text=Hola%2C%20vengo%20desde%20la%20p%C3%A1gina%20web%20de%20Celfun%20y%20me%20interesa%20conocer%20sus%20productos.%20%C2%BFPodr%C3%ADan%20ayudarme%3F" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold shadow-lg transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.531 3.609z"/>
            </svg>
            Chatear con Ventas
          </a>
          <a href="https://www.google.com/maps/search/celfun" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg font-semibold shadow transition-colors">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Tienda más cercana
          </a>
        </div>
       
      </section>

      {/* About Section */}
      <section className="w-full py-8 px-4 text-center">
        <h2 className="text-2xl font-bold mb-4">¿Por qué elegirnos?</h2>
        <p className="max-w-2xl mx-auto text-lg">Ofrecemos la mejor selección de accesorios para celular, atención personalizada y envíos rápidos a todo México.</p>
      </section>

      {/* Contact Section */}
      <section className="max-w-5xl mx-auto py-8 px-4 text-center">
        <h2 className="text-2xl font-bold mb-4">¿Tienes dudas?</h2>
        <p className="mb-4">Contáctanos y te ayudamos a encontrar el accesorio perfecto para tu celular.</p>
        <Link href="/contacto" className="inline-block px-6 py-3 rounded-lg font-semibold shadow transition-colors">Contacto</Link>
      </section>
    </main>
  );
}
