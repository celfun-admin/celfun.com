
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: '%s | Celfun',
    default: 'Celfun | Accesorios para Celular'
  },
  description: "Encuentra los mejores accesorios para tu celular en Celfun. Fundas, cargadores, audífonos y más con envío rápido y garantía.",
  keywords: ["accesorios celular", "fundas", "cargadores", "audífonos", "Celfun", "México"],
  authors: [{ name: "Celfun" }],
  creator: "Celfun",
  publisher: "Celfun",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: 'https://celfun.com',
    siteName: 'Celfun',
    title: 'Celfun | Accesorios para Celular',
    description: 'Encuentra los mejores accesorios para tu celular en Celfun.',
    images: [{
      url: '/globe.svg',
      width: 120,
      height: 120,
      alt: 'Celfun - Accesorios para Celular',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@celfunmx',
    creator: '@celfunmx',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
          <Header />
          {children}
          <Footer />
      </body>
    </html>
  );
}
