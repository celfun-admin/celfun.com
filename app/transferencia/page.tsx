'use client';

import { useState } from 'react';
import { Copy, Check, Building2, CreditCard } from 'lucide-react';

export const metadata = {
  title: "Transferencia Bancaria",
  description: "Realiza tu pago por transferencia SPEI con nuestros datos bancarios. Copia fácilmente la CLABE y número de cuenta para completar tu compra de accesorios para celular.",
  keywords: [
    "transferencia bancaria Celfun",
    "pago SPEI",
    "CLABE interbancaria",
    "BBVA Bancomer",
    "métodos de pago",
    "transferencia electrónica",
    "pago seguro",
    "datos bancarios",
    "compra accesorios celular"
  ],
  openGraph: {
    title: "Transferencia Bancaria | Celfun",
    description: "Realiza tu pago por transferencia SPEI con datos bancarios seguros. Proceso fácil y rápido para tus compras.",
    url: "https://celfun.com/transferencia",
  },
  twitter: {
    title: "Transferencia Bancaria | Celfun",
    description: "Paga por transferencia SPEI de forma segura. Datos bancarios para completar tu compra de accesorios para celular.",
  }
};

export default function TransferPage() {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const bankInfo = {
    bank: 'BBVA/Bancomer',
    clabe: '012540001791021832',
    account: '0179102183'
  };

  const copyToClipboard = async (text: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    } catch (err) {
      console.error('Error al copiar al portapapeles:', err);
      // Fallback para navegadores que no soportan la API del portapapeles
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Transferencia Bancaria
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Realiza tu pago por transferencia SPEI usando los siguientes datos bancarios.
            Haz clic en el botón de copiar para facilitar el proceso.
          </p>
        </div>

        {/* Bank Information Card */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-gray-200">
          <div className="flex items-center mb-6">
            <Building2 className="h-8 w-8 text-blue-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">{bankInfo.bank}</h2>
          </div>

          <div className="space-y-6">
            {/* CLABE */}
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <CreditCard className="h-5 w-5 text-gray-600 mr-2" />
                    <label className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                      CLABE Interbancaria
                    </label>
                  </div>
                  <div className="font-mono text-2xl font-bold text-gray-900 break-all">
                    {bankInfo.clabe}
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    Para transferencias SPEI desde cualquier banco
                  </p>
                </div>
                <button
                  onClick={() => copyToClipboard(bankInfo.clabe, 'clabe')}
                  className="ml-4 flex items-center justify-center h-12 w-12 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  title="Copiar CLABE"
                >
                  {copiedField === 'clabe' ? (
                    <Check className="h-5 w-5" />
                  ) : (
                    <Copy className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Account Number */}
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <CreditCard className="h-5 w-5 text-gray-600 mr-2" />
                    <label className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                      Número de Cuenta
                    </label>
                  </div>
                  <div className="font-mono text-2xl font-bold text-gray-900">
                    {bankInfo.account}
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    Para transferencias desde BBVA/Bancomer
                  </p>
                </div>
                <button
                  onClick={() => copyToClipboard(bankInfo.account, 'account')}
                  className="ml-4 flex items-center justify-center h-12 w-12 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  title="Copiar número de cuenta"
                >
                  {copiedField === 'account' ? (
                    <Check className="h-5 w-5" />
                  ) : (
                    <Copy className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="bg-blue-50 rounded-lg p-6 border border-blue-200 mb-8">
          <h3 className="text-lg font-semibold text-blue-900 mb-4">
            Instrucciones para la transferencia
          </h3>
          <ul className="space-y-2 text-blue-800">
            <li className="flex items-start">
              <span className="font-bold mr-2">1.</span>
              <span>Ingresa a tu app bancaria o banca en línea</span>
            </li>
            <li className="flex items-start">
              <span className="font-bold mr-2">2.</span>
              <span>Selecciona la opción de transferencia SPEI</span>
            </li>
            <li className="flex items-start">
              <span className="font-bold mr-2">3.</span>
              <span>Usa la CLABE interbancaria para transferencias desde cualquier banco</span>
            </li>
            <li className="flex items-start">
              <span className="font-bold mr-2">4.</span>
              <span>Si tienes cuenta BBVA, puedes usar el número de cuenta directamente</span>
            </li>
            <li className="flex items-start">
              <span className="font-bold mr-2">5.</span>
              <span>Envía el comprobante de transferencia por WhatsApp o correo</span>
            </li>
          </ul>
        </div>

        {/* Important Notice */}
        <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-200">
          <h3 className="text-lg font-semibold text-yellow-900 mb-3">
            ⚠️ Importante
          </h3>
          <div className="space-y-2 text-yellow-800">
            <p>
              • Verifica que los datos bancarios sean correctos antes de realizar la transferencia
            </p>
            <p>
              • Las transferencias SPEI se procesan de manera inmediata las 24 horas
            </p>
            <p>
              • Conserva tu comprobante de pago para cualquier aclaración
            </p>
            <p>
              • Una vez realizada la transferencia, envíanos el comprobante para procesar tu pedido
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
