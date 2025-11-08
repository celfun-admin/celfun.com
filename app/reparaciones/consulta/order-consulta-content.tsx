"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
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
  Download,
  MessageCircle,
  Smartphone,
  Battery,
  Camera,
  Volume2,
  Zap,
  Wifi
} from "lucide-react";

interface OrderData {
  orderId: string;
  deviceModel: string;
  customerName: string;
  customerPhone: string;
  issueDescription: string;
  entryDate: string;
  estimatedCompletion: string;
  status: 'received' | 'diagnosed' | 'in-repair' | 'completed' | 'ready-pickup' | 'delivered';
  currentStep: number;
  repairDetails: {
    diagnosis: string;
    partsNeeded: string[];
    laborCost: number;
    partsCost: number;
    totalCost: number;
  };
  timeline: {
    step: string;
    title: string;
    description: string;
    completed: boolean;
    date?: string;
    isActive: boolean;
  }[];
  technician: {
    name: string;
    id: string;
  };
  warranty: {
    duration: string;
    coverage: string;
  };
}

export default function OrderConsultaContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get('order');
  const [orderData, setOrderData] = useState<OrderData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (orderId) {
      // Simulate API call to fetch order data
      setTimeout(() => {
        const mockOrderData: OrderData = {
          orderId: orderId,
          deviceModel: "iPhone 14 Pro",
          customerName: "Juan Pérez",
          customerPhone: "+52 55 1234 5678",
          issueDescription: "Pantalla rota después de caída. Touch funciona parcialmente.",
          entryDate: "2024-11-04",
          estimatedCompletion: "2024-11-06",
          status: "in-repair",
          currentStep: 2,
          repairDetails: {
            diagnosis: "Pantalla LCD dañada, digitalizador funcional. Marco sin daños.",
            partsNeeded: ["Pantalla LCD iPhone 14 Pro", "Adhesivo de pantalla"],
            laborCost: 300,
            partsCost: 1200,
            totalCost: 1500
          },
          timeline: [
            {
              step: "1",
              title: "Recepción del Dispositivo",
              description: "Tu dispositivo ha sido recibido y registrado en nuestro sistema",
              completed: true,
              date: "2024-11-04 10:30 AM",
              isActive: false
            },
            {
              step: "2",
              title: "Diagnóstico Técnico",
              description: "Evaluación completa del dispositivo y identificación del problema",
              completed: true,
              date: "2024-11-04 02:15 PM",
              isActive: false
            },
            {
              step: "3",
              title: "Reparación en Proceso",
              description: "Nuestro técnico está trabajando en la reparación de tu dispositivo",
              completed: false,
              isActive: true
            },
            {
              step: "4",
              title: "Control de Calidad",
              description: "Pruebas finales para garantizar el correcto funcionamiento",
              completed: false,
              isActive: false
            },
            {
              step: "5",
              title: "Listo para Recoger",
              description: "Tu dispositivo está reparado y listo para ser retirado",
              completed: false,
              isActive: false
            }
          ],
          technician: {
            name: "Carlos Rodríguez",
            id: "TECH-001"
          },
          warranty: {
            duration: "6 meses",
            coverage: "Pantalla y mano de obra"
          }
        };
        
        setOrderData(mockOrderData);
        setLoading(false);
      }, 1000);
    } else {
      setError("No se proporcionó número de orden");
      setLoading(false);
    }
  }, [orderId]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'received': return 'bg-blue-100 text-blue-800';
      case 'diagnosed': return 'bg-yellow-100 text-yellow-800';
      case 'in-repair': return 'bg-orange-100 text-orange-800';
      case 'completed': return 'bg-green-100 text-green-800';
      case 'ready-pickup': return 'bg-purple-100 text-purple-800';
      case 'delivered': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'received': return <Package className="h-5 w-5" />;
      case 'diagnosed': return <FileText className="h-5 w-5" />;
      case 'in-repair': return <Wrench className="h-5 w-5" />;
      case 'completed': return <CheckCircle className="h-5 w-5" />;
      case 'ready-pickup': return <AlertCircle className="h-5 w-5" />;
      case 'delivered': return <CheckCircle className="h-5 w-5" />;
      default: return <Clock className="h-5 w-5" />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'received': return 'Recibido';
      case 'diagnosed': return 'Diagnosticado';
      case 'in-repair': return 'En Reparación';
      case 'completed': return 'Completado';
      case 'ready-pickup': return 'Listo para Recoger';
      case 'delivered': return 'Entregado';
      default: return 'Desconocido';
    }
  };

  if (loading) {
    return <div className="text-center py-8">Cargando información del pedido...</div>;
  }

  if (error) {
    return (
      <div className="bg-white rounded-lg shadow-md border border-red-200 p-8 text-center">
        <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
        <h2 className="text-xl font-semibold text-red-700 mb-2">Error</h2>
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  if (!orderData) {
    return (
      <div className="bg-white rounded-lg shadow-md border border-yellow-200 p-8 text-center">
        <Package className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
        <h2 className="text-xl font-semibold text-yellow-700 mb-2">Orden no encontrada</h2>
        <p className="text-yellow-600">No se pudo encontrar información para el número de orden proporcionado.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Order Header */}
      <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h2 className="text-2xl font-bold text-gray-900">Orden #{orderData.orderId}</h2>
              <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(orderData.status)}`}>
                {getStatusIcon(orderData.status)}
                {getStatusText(orderData.status)}
              </span>
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <Smartphone className="h-4 w-4" />
                {orderData.deviceModel}
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                Ingresó: {new Date(orderData.entryDate).toLocaleDateString('es-MX')}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                Estimado: {new Date(orderData.estimatedCompletion).toLocaleDateString('es-MX')}
              </div>
            </div>
          </div>
          <div className="flex gap-3">
            <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <Download className="h-4 w-4 mr-2" />
              Descargar Recibo
            </button>
            <button className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
              <MessageCircle className="h-4 w-4 mr-2" />
              Contactar
            </button>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Timeline */}
          <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Estado de la Reparación</h3>
            <div className="space-y-6">
              {orderData.timeline.map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold
                      ${step.completed 
                        ? 'bg-green-600 text-white' 
                        : step.isActive 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-gray-200 text-gray-500'
                      }`}>
                      {step.completed ? <CheckCircle className="h-5 w-5" /> : step.step}
                    </div>
                    {index < orderData.timeline.length - 1 && (
                      <div className={`w-0.5 h-16 mt-2 ${step.completed ? 'bg-green-600' : 'bg-gray-200'}`} />
                    )}
                  </div>
                  <div className="flex-1 pb-8">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className={`font-semibold ${step.isActive ? 'text-blue-700' : 'text-gray-900'}`}>
                        {step.title}
                      </h4>
                      {step.date && (
                        <span className="text-sm text-gray-500">{step.date}</span>
                      )}
                    </div>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                    {step.isActive && (
                      <div className="mt-2">
                        <span className="inline-flex items-center px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded">
                          En proceso
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Repair Details */}
          <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Detalles de la Reparación</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Diagnóstico</h4>
                <p className="text-gray-600 bg-gray-50 p-3 rounded-lg">{orderData.repairDetails.diagnosis}</p>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Piezas Necesarias</h4>
                <ul className="space-y-1">
                  {orderData.repairDetails.partsNeeded.map((part, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      {part}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t pt-4">
                <h4 className="font-medium text-gray-900 mb-3">Costos</h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-gray-600">
                    <span>Mano de obra:</span>
                    <span>${orderData.repairDetails.laborCost.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Piezas:</span>
                    <span>${orderData.repairDetails.partsCost.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-lg font-semibold text-gray-900 border-t pt-2">
                    <span>Total:</span>
                    <span>${orderData.repairDetails.totalCost.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Customer Info */}
          <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Información del Cliente</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <User className="h-4 w-4 text-gray-400" />
                <span className="text-gray-700">{orderData.customerName}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-gray-400" />
                <span className="text-gray-700">{orderData.customerPhone}</span>
              </div>
              <div className="flex items-start gap-3">
                <FileText className="h-4 w-4 text-gray-400 mt-0.5" />
                <span className="text-gray-700 text-sm">{orderData.issueDescription}</span>
              </div>
            </div>
          </div>

          {/* Technician Info */}
          <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Técnico Asignado</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                  {orderData.technician.name.charAt(0)}
                </div>
                <div>
                  <p className="font-medium text-gray-900">{orderData.technician.name}</p>
                  <p className="text-sm text-gray-500">ID: {orderData.technician.id}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Warranty Info */}
          <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Garantía</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Clock className="h-4 w-4 text-gray-400" />
                <span className="text-gray-700">{orderData.warranty.duration}</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                <span className="text-gray-700 text-sm">{orderData.warranty.coverage}</span>
              </div>
            </div>
          </div>

          {/* Contact Support */}
          <div className="bg-blue-50 rounded-lg border border-blue-200 p-6">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">¿Necesitas Ayuda?</h3>
            <p className="text-blue-700 text-sm mb-4">
              Si tienes alguna pregunta sobre tu reparación, no dudes en contactarnos.
            </p>
            <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center justify-center gap-2">
              <Phone className="h-4 w-4" />
              Llamar Soporte
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}