import type { Metadata } from "next";
import { Suspense } from "react";
import { 
  Package,
  Clock,
  CheckCircle,
  AlertCircle,
  Wrench,
  Phone,
  Calendar,
  MapPin,
  User,
  FileText,
  ArrowLeft,
  Download,
  MessageCircle
} from "lucide-react";
import Link from "next/link";
import OrderConsultaContent from "./order-consulta-content";

export const metadata: Metadata = {
  title: "Consulta tu Reparación | Estado del Pedido",
  description: "Consulta el estado de tu reparación de celular en tiempo real. Seguimiento completo desde el diagnóstico hasta la entrega.",
  keywords: ["consulta reparación", "estado pedido", "seguimiento", "orden", "Celfun"],
};

export default function ConsultaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link 
              href="/reparaciones"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Volver a Reparaciones
            </Link>
            <div className="border-l border-gray-300 pl-4">
              <h1 className="text-2xl font-bold text-gray-900">Consulta tu Reparación</h1>
              <p className="text-gray-600">Seguimiento en tiempo real del estado de tu dispositivo</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Suspense fallback={<OrderLoadingSkeleton />}>
          <OrderConsultaContent />
        </Suspense>
      </div>
    </div>
  );
}

// Loading skeleton component
function OrderLoadingSkeleton() {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
        <div className="animate-pulse">
          <div className="h-6 bg-gray-200 rounded w-1/3 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-2/3"></div>
        </div>
      </div>
      
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
            <div className="animate-pulse">
              <div className="h-5 bg-gray-200 rounded w-1/4 mb-4"></div>
              <div className="space-y-3">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                    <div className="flex-1">
                      <div className="h-4 bg-gray-200 rounded w-1/3 mb-1"></div>
                      <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
            <div className="animate-pulse">
              <div className="h-5 bg-gray-200 rounded w-1/3 mb-4"></div>
              <div className="space-y-2">
                {[1, 2, 3].map(i => (
                  <div key={i} className="h-4 bg-gray-200 rounded w-full"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
