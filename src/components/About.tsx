import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faAward, faCheckCircle, faHeart, faShieldAlt, faBullseye } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom"

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 py-20">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src="https://via.placeholder.com/1920x400" alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-700/80 z-10"></div>
        <div className="container mx-auto px-4 relative z-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Sobre Nosotros</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Somos una empresa colombiana dedicada a brindar soluciones financieras accesibles y transparentes para
            todos.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-blue-100 text-blue-600 font-bold px-4 py-1 rounded-full text-sm mb-4">
                Nuestra Historia
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
                Transformando el acceso al crédito en Colombia desde 2015
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Fundada en 2015, CrediInternacional nació con la misión de democratizar el acceso al crédito en Colombia,
                  ofreciendo soluciones financieras innovadoras y accesibles para todos los colombianos.
                </p>
                <p>
                  A lo largo de los años, hemos ayudado a miles de personas a cumplir sus sueños, desde emprendedores
                  que necesitan capital para sus negocios hasta familias que buscan mejorar su calidad de vida.
                </p>
                <p>
                  Nuestra plataforma digital ha revolucionado la forma en que los colombianos acceden a préstamos,
                  eliminando trámites burocráticos y ofreciendo un proceso 100% en línea, rápido y seguro.
                </p>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link to="https://api.whatsapp.com/send?phone=573224055455&text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20prestamo%20o%20credito" target='_blank' className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md">
                  Conoce nuestros servicios
                </Link>
                <Link to="https://api.whatsapp.com/send?phone=573224055455&text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20prestamo%20o%20credito" target='_blank' className="border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium py-3 px-6 rounded-md flex items-center justify-center">
                  <FontAwesomeIcon icon={faHeart} className="mr-2" /> Nuestra comunidad
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-yellow-400 rounded-lg z-0"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-400 rounded-lg z-0"></div>
              <img
                src={`${window.location.origin}/aboutus.png`}
                alt="Nuestra historia"
                className="rounded-lg shadow-xl relative z-10 w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Nuestra Misión y Visión</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trabajamos con un propósito claro y una visión ambiciosa
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-blue-600 h-2"></div>
              <div className="p-8">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                    <FontAwesomeIcon icon={faBullseye} className="w-8 h-8 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-blue-900 text-center mb-4">Nuestra Misión</h3>
                <p className="text-gray-600 text-center">
                  Brindar soluciones financieras accesibles, rápidas y transparentes que impulsen el desarrollo personal
                  y profesional de los colombianos, contribuyendo al crecimiento económico del país.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-yellow-500 h-2"></div>
              <div className="p-8">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center">
                    <FontAwesomeIcon icon={faAward} className="w-8 h-8 text-yellow-600" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-blue-900 text-center mb-4">Nuestra Visión</h3>
                <p className="text-gray-600 text-center">
                  Ser la entidad financiera digital líder en Colombia, reconocida por su innovación, transparencia y
                  compromiso con el bienestar financiero de nuestros clientes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Nuestros Valores</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Principios que guían nuestras acciones cada día</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <FontAwesomeIcon icon={faShieldAlt} className="w-10 h-10 text-blue-600" />,
                title: "Transparencia",
                description:
                  "Comunicamos de manera clara y honesta todas las condiciones de nuestros servicios, sin letras pequeñas ni sorpresas.",
              },
              {
                icon: <FontAwesomeIcon icon={faBullseye} className="w-10 h-10 text-blue-600" />,
                title: "Innovación",
                description:
                  "Buscamos constantemente nuevas formas de mejorar nuestros servicios y adaptarnos a las necesidades cambiantes de nuestros clientes.",
              },
              {
                icon: <FontAwesomeIcon icon={faHeart} className="w-10 h-10 text-blue-600" />,
                title: "Compromiso",
                description:
                  "Nos comprometemos con el bienestar financiero de nuestros clientes, ofreciendo soluciones que realmente se adapten a sus necesidades.",
              },
              {
                icon: <FontAwesomeIcon icon={faCheckCircle} className="w-10 h-10 text-blue-600" />,
                title: "Excelencia",
                description:
                  "Buscamos la excelencia en todo lo que hacemos, desde la atención al cliente hasta la seguridad de nuestros procesos.",
              },
              {
                icon: <FontAwesomeIcon icon={faAward} className="w-10 h-10 text-blue-600" />,
                title: "Integridad",
                description:
                  "Actuamos con honestidad y ética en todas nuestras operaciones, generando confianza en nuestros clientes y colaboradores.",
              },
              {
                icon: <FontAwesomeIcon icon={faShieldAlt} className="w-10 h-10 text-blue-600" />,
                title: "Responsabilidad",
                description:
                  "Asumimos la responsabilidad de nuestras acciones y decisiones, siempre buscando el beneficio de nuestros clientes y la sociedad.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">{value.icon}</div>
                  <h3 className="text-xl font-bold text-blue-900">{value.title}</h3>
                </div>
                <p className="text-gray-600 ml-16">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Nuestro Equipo Directivo</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Profesionales comprometidos con la excelencia</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Juan Carlos Rodríguez",
                position: "Director Ejecutivo",
                image: `${window.location.origin}/employees/3.jpeg`,
                bio: "Con más de 15 años de experiencia en el sector financiero, Carlos ha liderado la transformación digital de varias instituciones financieras en Colombia.",
              },
              {
                name: "Sabrina Acosta",
                position: "Directora Financiera",
                image: `${window.location.origin}/employees/2.jpeg`,
                bio: "Experta en finanzas con un MBA de la Universidad de los Andes, Laura ha sido fundamental en el desarrollo de nuestros productos financieros innovadores.",
              },
              {
                name: "Andres Alvarez",
                position: "Director de Tecnología",
                image: `${window.location.origin}/employees/1.jpeg`,
                bio: "Ingeniero de sistemas con experiencia en empresas como Google y Microsoft, Andrés lidera nuestra plataforma tecnológica de vanguardia.",
              },
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="relative h-64">
                  <img
                    src={member.image || "/placeholder.svg"}

                    alt={member.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-900">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-4">{member.position}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para trabajar con nosotros?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Descubre cómo nuestras soluciones financieras pueden ayudarte a alcanzar tus metas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="https://api.whatsapp.com/send?phone=573224055455&text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20prestamo%20o%20credito" target="_blank" className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold text-lg px-6 py-3 rounded-md flex items-center justify-center">
              Solicitar préstamo <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </Link>
            <Link
              to="/contacto"
              className="border border-white text-white hover:bg-white/10 font-medium text-lg px-6 py-3 rounded-md flex items-center justify-center"
            >
              Contáctanos
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About

