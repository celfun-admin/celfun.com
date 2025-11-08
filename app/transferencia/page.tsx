import TransferContent from './transfer-content';

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
  return <TransferContent />;
}
