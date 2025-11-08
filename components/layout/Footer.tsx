
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-100 border-t mt-12 py-8 px-4">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-gray-600 text-sm mb-2 md:mb-0">© {new Date().getFullYear()} Celfun. Todos los derechos reservados.</div>
        <div className="flex flex-wrap gap-4 text-sm">
          <Link href="/garantias" className="text-gray-700 hover:text-blue-600 transition-colors">Garantías</Link>
          <Link href="/aviso-de-privacidad" className="text-gray-700 hover:text-blue-600 transition-colors">Aviso de Privacidad</Link>
          <Link href="/terminos-y-condiciones" className="text-gray-700 hover:text-blue-600 transition-colors">Términos y Condiciones</Link>
          <Link href="/contacto" className="text-gray-700 hover:text-blue-600 transition-colors">Contacto</Link>
          <a href="mailto:info@celfun.com" className="text-gray-700 hover:text-blue-600 transition-colors">info@celfun.com</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;