import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
          <Link to="/" className="flex items-center">
              {/* <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center mr-2">
                <span className="font-bold">CI</span>
              </div>
              <span className="text-2xl font-bold text-blue-900">
                Credi<span className="text-yellow-500">internacional</span>
              </span> */}
              <img src={`${window.location.origin}/logo.png`} className="w-[150px]" />
            </Link>
            <p className="text-blue-200">
              Soluciones financieras a tu alcance para cumplir tus metas y sueños en toda Colombia.
            </p>
            {/* <div className="flex space-x-4">
              <a
                href="#"
                className="bg-blue-800 hover:bg-blue-700 w-10 h-10 rounded-full flex items-center justify-center"
              >
                <FontAwesomeIcon icon={faFacebookF} className="w-5 h-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="#"
                className="bg-blue-800 hover:bg-blue-700 w-10 h-10 rounded-full flex items-center justify-center"
              >
                <FontAwesomeIcon icon={faTwitter} className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="#"
                className="bg-blue-800 hover:bg-blue-700 w-10 h-10 rounded-full flex items-center justify-center"
              >
                <FontAwesomeIcon icon={faInstagram} className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="#"
                className="bg-blue-800 hover:bg-blue-700 w-10 h-10 rounded-full flex items-center justify-center"
              >
                <FontAwesomeIcon icon={faLinkedinIn} className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div> */}
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-yellow-400">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-blue-200 hover:text-white transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/nosotros" className="text-blue-200 hover:text-white transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link to="#" className="text-blue-200 hover:text-white transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link to="#" className="text-blue-200 hover:text-white transition-colors">
                  Simulador
                </Link>
              </li>
              <li>
                <Link to="https://api.whatsapp.com/send?phone=573224055455&text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20prestamo%20o%20credito" target="_blank" className="text-blue-200 hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-yellow-400">Servicios</h3>
            <ul className="space-y-3">
              <li>
                <Link to="#" className="text-blue-200 hover:text-white transition-colors">
                  Préstamos Personales
                </Link>
              </li>
              <li>
                <Link to="#" className="text-blue-200 hover:text-white transition-colors">
                  Créditos de Libre Inversión
                </Link>
              </li>
              <li>
                <Link to="#" className="text-blue-200 hover:text-white transition-colors">
                  Préstamos para Negocios
                </Link>
              </li>
              <li>
                <Link to="#" className="text-blue-200 hover:text-white transition-colors">
                  Consolidación de Deudas
                </Link>
              </li>
              <li>
                <Link to="#" className="text-blue-200 hover:text-white transition-colors">
                  Créditos Hipotecarios
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-yellow-400">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">•</span>
                <span className="text-blue-200">calle 85 #19B-22 Bogota D.C, Colombia</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">•</span>
                <span className="text-blue-200">+57 (322) 4055455</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">•</span>
                <span className="text-blue-200">crediinternacional2025@gmail.com</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">•</span>
                <span className="text-blue-200">Lun - Vie: 8:00 AM - 6:00 PM</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">•</span>
                <span className="text-blue-200">Sab: 8:00 AM - 15:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-blue-950 py-4">
        <div className="container mx-auto px-4 text-center text-blue-300 text-sm">
          <p>
            © {new Date().getFullYear()} CrediInternacional. Todos los derechos reservados. | Vigilado por la Superintendencia
            Financiera de Colombia
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
