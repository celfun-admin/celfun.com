import type { Metadata } from "next";
import { 
  Smartphone, 
  Wrench, 
  Clock, 
  Shield, 
  Star, 
  CheckCircle, 
  Phone, 
  MapPin, 
  Calendar,
  Zap,
  Battery,
  Camera,
  Volume2,
  Wifi
} from "lucide-react";
import OrderTrackingForm from "./order-tracking-form";

export const metadata: Metadata = {
  title: "Reparaciones de Celulares | Servicio Técnico Especializado",
  description: "Reparación profesional de celulares con garantía. Cambio de pantalla, batería, cámara y más. Diagnóstico gratuito y servicio en 30 minutos.",
  keywords: ["reparación celulares", "servicio técnico", "cambio pantalla", "batería", "diagnóstico gratuito", "Celfun"],
};

export default function ReparacionesPage() {

  const services = [
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Cambio de Pantalla",
      description: "Reparamos pantallas rotas o dañadas con piezas originales",
      price: "Desde $899"
    },
    {
      icon: <Battery className="h-8 w-8" />,
      title: "Reemplazo de Batería",
      description: "Batería nueva para extender la vida útil de tu dispositivo",
      price: "Desde $549"
    },
    {
      icon: <Camera className="h-8 w-8" />,
      title: "Reparación de Cámara",
      description: "Solucionamos problemas de cámara frontal y trasera",
      price: "Desde $699"
    },
    {
      icon: <Volume2 className="h-8 w-8" />,
      title: "Audio y Altavoces",
      description: "Reparamos problemas de sonido y altavoces",
      price: "Desde $449"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Puerto de Carga",
      description: "Reparación del puerto de carga y conectores",
      price: "Desde $399"
    },
    {
      icon: <Wifi className="h-8 w-8" />,
      title: "Problemas de Software",
      description: "Soluciones para problemas de sistema y aplicaciones",
      price: "Desde $299"
    }
  ];

  const repairProcess = [
    {
      step: "1",
      title: "Diagnóstico Gratuito",
      description: "Evaluamos tu dispositivo sin costo para identificar el problema"
    },
    {
      step: "2",
      title: "Cotización Transparente",
      description: "Te proporcionamos un presupuesto claro antes de cualquier reparación"
    },
    {
      step: "3",
      title: "Reparación Profesional",
      description: "Nuestros técnicos certificados realizan la reparación con piezas de calidad"
    },
    {
      step: "4",
      title: "Control de Calidad",
      description: "Probamos completamente tu dispositivo antes de entregártelo"
    }
  ];

  const brands = [
    "iPhone", "Samsung", "Huawei", "Xiaomi", "Motorola", "LG", 
    "Sony", "OnePlus", "Google Pixel", "Nokia", "Oppo", "Vivo"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Copy and CTA */}
            <div className="space-y-6">
              <div className="space-y-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 hover:bg-blue-200">
                  🔧 Servicio Técnico Especializado
                </span>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Reparaciones de Celulares 
                  <span className="text-blue-600"> Rápidas y Confiables</span>
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Devolvemos la vida a tu dispositivo con técnicos certificados, piezas originales 
                  y garantía en todas nuestras reparaciones. Más de 10 años de experiencia nos respaldan.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Clock className="h-4 w-4 text-green-600" />
                  Reparación en 30 min
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Shield className="h-4 w-4 text-blue-600" />
                  Garantía de 6 meses
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Star className="h-4 w-4 text-yellow-600" />
                  +5,000 clientes satisfechos
                </div>
              </div>

              <div className="pt-4">
                <button className="inline-flex items-center px-8 py-3 text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
                  <Phone className="h-5 w-5 mr-2" />
                  Solicitar Diagnóstico Gratuito
                </button>
              </div>
            </div>

            {/* Right Column - Order Tracking Form */}
            <div className="lg:pl-8">
              <OrderTrackingForm />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Servicios de Reparación
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ofrecemos una amplia gama de servicios de reparación para todas las marcas y modelos de smartphones
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
                <div className="text-center pb-4 pt-6 px-6">
                  <div className="mx-auto bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                </div>
                <div className="text-center space-y-3 pb-6 px-6">
                  <p className="text-gray-600">{service.description}</p>
                  <div className="text-lg font-semibold text-blue-600">{service.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Nuestro Proceso de Reparación
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Un proceso transparente y profesional que garantiza la mejor calidad en cada reparación
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {repairProcess.map((item, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
            Marcas que Reparamos
          </h2>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {brands.map((brand, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                <span className="font-medium text-gray-700">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              ¿Por qué Elegir Celfun?
            </h2>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto">
              Somos la opción preferida de miles de clientes en México
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <Shield className="h-12 w-12 mx-auto mb-4 text-blue-300" />
              <h3 className="text-xl font-semibold mb-2">Garantía Extendida</h3>
              <p className="text-blue-100">6 meses de garantía en todas nuestras reparaciones</p>
            </div>
            <div className="text-center">
              <Clock className="h-12 w-12 mx-auto mb-4 text-blue-300" />
              <h3 className="text-xl font-semibold mb-2">Servicio Rápido</h3>
              <p className="text-blue-100">La mayoría de reparaciones en menos de 30 minutos</p>
            </div>
            <div className="text-center">
              <CheckCircle className="h-12 w-12 mx-auto mb-4 text-blue-300" />
              <h3 className="text-xl font-semibold mb-2">Piezas Originales</h3>
              <p className="text-blue-100">Solo utilizamos componentes de la más alta calidad</p>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Contact Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Visítanos</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Dirección</h3>
                    <p className="text-gray-600">Av. Principal #123, Centro, Ciudad de México</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Horarios</h3>
                    <p className="text-gray-600">Lunes a Viernes: 9:00 AM - 7:00 PM</p>
                    <p className="text-gray-600">Sábados: 9:00 AM - 5:00 PM</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Teléfono</h3>
                    <p className="text-gray-600">+52 55 1234 5678</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Agenda tu Cita</h2>
              <div className="bg-white rounded-lg shadow-lg border border-gray-200">
                <div className="p-6">
                  <div className="space-y-4">
                    <input 
                      type="text"
                      placeholder="Tu nombre completo" 
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <input 
                      type="tel"
                      placeholder="Número de teléfono" 
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <input 
                      type="text"
                      placeholder="Modelo de tu celular" 
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <textarea 
                      className="w-full p-3 border border-gray-300 rounded-md resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      rows={3}
                      placeholder="Describe el problema de tu dispositivo"
                    />
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors inline-flex items-center justify-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      Agendar Cita
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Preguntas Frecuentes
          </h2>
          
          <div className="space-y-6">
            {[
              {
                question: "¿Cuánto tiempo tarda una reparación?",
                answer: "La mayoría de nuestras reparaciones se completan en 30 minutos. Para casos más complejos, puede tomar hasta 24 horas."
              },
              {
                question: "¿Qué garantía ofrecen?",
                answer: "Ofrecemos 6 meses de garantía en todas nuestras reparaciones, cubriendo tanto mano de obra como piezas."
              },
              {
                question: "¿Utilizan piezas originales?",
                answer: "Sí, trabajamos exclusivamente con piezas originales y de alta calidad para garantizar el mejor rendimiento."
              },
              {
                question: "¿Puedo esperar mientras reparan mi celular?",
                answer: "¡Por supuesto! Tenemos una cómoda área de espera donde puedes aguardar mientras reparamos tu dispositivo."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md border border-gray-200">
                <div className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
