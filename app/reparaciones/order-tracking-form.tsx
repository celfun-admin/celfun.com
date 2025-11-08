"use client";

import { useState, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import { Wrench } from "lucide-react";

export default function OrderTrackingForm() {
  const [orderId, setOrderId] = useState("");
  const router = useRouter();

  const handleOrderSearch = () => {
    if (orderId.trim()) {
      router.push(`/reparaciones/consulta?order=${encodeURIComponent(orderId.trim())}`);
    }
  };

  const handleOrderIdChange = (e: ChangeEvent<HTMLInputElement>) => {
    setOrderId(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleOrderSearch();
    }
  };

  return (
    <div className="bg-white shadow-xl rounded-lg border-0">
      <div className="text-center pb-6 px-6 pt-6">
        <h2 className="text-2xl font-bold text-gray-900">
          Consulta tu Reparación
        </h2>
        <p className="text-gray-600 mt-2">
          Ingresa tu número de orden para verificar el estado de tu reparación
        </p>
      </div>
      <div className="space-y-6 px-6 pb-6">
        <div className="space-y-2">
          <label htmlFor="orderId" className="text-sm font-medium text-gray-700">
            Número de Orden
          </label>
          <input
            id="orderId"
            type="text"
            placeholder="Ej: CEL-2024-001234"
            value={orderId}
            onChange={handleOrderIdChange}
            onKeyPress={handleKeyPress}
            className="w-full h-12 px-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <button 
          onClick={handleOrderSearch}
          className="w-full h-12 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium rounded-lg transition-colors inline-flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!orderId.trim()}
        >
          <Wrench className="h-5 w-5 mr-2" />
          Consultar Estado
        </button>
      </div>
    </div>
  );
}