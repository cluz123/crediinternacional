"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faPhone,
  faEnvelope,
  faBars,
  faTimes,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons"
import { faFacebook, faInstagram, faLinkedin, faTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons"



const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <Link target="_blank" to="https://api.whatsapp.com/send?phone=573224055455&text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20prestamo%20o%20credito" className="flex items-center">
                <FontAwesomeIcon icon={faWhatsapp}  className="w-4 h-4 mr-2" />
                <span className="text-sm">+57 (322) 4055455</span>
              </Link>
              {/* <div className="hidden md:flex items-center">
                <FontAwesomeIcon icon={faEnvelope}  className="w-4 h-4 mr-2" />
                <span className="text-sm">info@prestamos.co</span>
              </div> */}
            </div>
            {/* <div className="flex items-center space-x-3">
              <a href="#" className="text-white hover:text-yellow-400">
                <FontAwesomeIcon icon={faFacebook}  className="w-4 h-4" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-white hover:text-yellow-400">
                <FontAwesomeIcon icon={faTwitter}  className="w-4 h-4" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-white hover:text-yellow-400">
                <FontAwesomeIcon icon={faInstagram}  className="w-4 h-4" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-white hover:text-yellow-400">
                <FontAwesomeIcon icon={faLinkedin}  className="w-4 h-4" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div> */}
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              {/* <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center mr-2">
                <span className="font-bold">CI</span>
              </div>
              <span className="text-2xl font-bold text-blue-900">
                Credi<span className="text-yellow-500">internacional</span>
              </span> */}
              <img src={`${window.location.origin}/logo.png`} className="w-[150px]" />
            </Link>
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className="text-blue-900 font-medium hover:text-blue-600 transition-colors py-2 border-b-2 border-transparent hover:border-blue-600"
            >
              Inicio
            </Link>
            <Link
              to="/nosotros"
              className="text-blue-900 font-medium hover:text-blue-600 transition-colors py-2 border-b-2 border-transparent hover:border-blue-600"
            >
              Nosotros
            </Link>
            {/* <Link
              to="#"
              className="text-blue-900 font-medium hover:text-blue-600 transition-colors py-2 border-b-2 border-transparent hover:border-blue-600"
            >
              Servicios
            </Link>
            <Link
              to="#"
              className="text-blue-900 font-medium hover:text-blue-600 transition-colors py-2 border-b-2 border-transparent hover:border-blue-600"
            >
              Simulador
            </Link>
            <Link
              to="#"
              className="text-blue-900 font-medium hover:text-blue-600 transition-colors py-2 border-b-2 border-transparent hover:border-blue-600"
            >
              Preguntas Frecuentes
            </Link>*/}
            <Link 
              to="/contacto"
              className="text-blue-900 font-medium hover:text-blue-600 transition-colors py-2 border-b-2 border-transparent hover:border-blue-600"
            >
              Contacto
            </Link>
            <Link to="https://api.whatsapp.com/send?phone=573224055455&text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20prestamo%20o%20credito" target="_blank" className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-2 px-4 rounded-md flex items-center">
              Solicitar Ahora <FontAwesomeIcon icon={faArrowRight}  className="ml-2" />
            </Link>
          </nav>

          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-blue-900 focus:outline-none">
              <FontAwesomeIcon icon={faBars}  className="h-6 w-6" />
              <span className="sr-only">Abrir menú</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-white lg:hidden">
          <div className="container h-full px-4 flex flex-col">
            <div className="flex h-20 items-center justify-between">
            <Link to="/" className="flex items-center">
              {/* <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center mr-2">
                <span className="font-bold">CI</span>
              </div>
              <span className="text-2xl font-bold text-blue-900">
                Credi<span className="text-yellow-500">internacional</span>
              </span> */}
              <img src={`${window.location.origin}/logo.png`} className="w-[150px]" />
            </Link>
              <button onClick={() => setIsOpen(false)} className="text-blue-900 focus:outline-none">
                <FontAwesomeIcon icon={faTimes}  className="h-6 w-6" />
                <span className="sr-only">Cerrar menú</span>
              </button>
            </div>

            <nav className="flex flex-col space-y-6 py-8">
              <Link
                to="/"
                className="text-lg font-medium text-blue-900 hover:text-blue-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Inicio
              </Link>
              <Link
                to="/nosotros"
                className="text-lg font-medium text-blue-900 hover:text-blue-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Nosotros
              </Link>
              <Link
                to="/contacto"
                className="text-lg font-medium text-blue-900 hover:text-blue-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contacto
              </Link>
              <Link
                to="https://api.whatsapp.com/send?phone=573224055455&text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20prestamo%20o%20credito" target="_blank"
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-3 px-4 rounded-md flex items-center justify-center"
                onClick={() => setIsOpen(false)}
              >
                Solicitar ahora <FontAwesomeIcon icon={faArrowRight}  className="ml-2"  />
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header