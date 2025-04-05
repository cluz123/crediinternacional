import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faAward, faChartBar, faCheckCircle, faClock, faCreditCard, faDollarSign, faHeart, faLandmark, faLightbulb, faCommentDots, faPhone, faShieldAlt, faStar, faThumbsUp, faTrophy, faUsers, faUser } from '@fortawesome/free-solid-svg-icons';
  import LoanSimulator from "../components/LoanSimulator"
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';
import { useState } from 'react';
  
  const Home = () => {


    const [formData, setFormData] = useState({
      nombre: '',
      email: '',
      telefono: '',
      monto: '$1.000.000',
    });
  
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    const handleSelectChange = (e:React.ChangeEvent<HTMLSelectElement>) => {
      const { value } = e.target;
      setFormData({
        ...formData,
        monto: value,
      });
    };
  
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
    
      // Haciendo el cast explícito a HTMLFormElement
      const form = e.target as HTMLFormElement;
    
      emailjs
        .sendForm('service_l905xjp', 'template_qp7dnfp', form, 'o3eP2vCkKlvXr6R7k')
        .then(
          (result) => {
            alert('Correo enviado con éxito!');
          },
          (error:any) => {
            alert('Hubo un error al enviar el correo:');
          }
        );
    };
    




    return (
      <div className="flex flex-col min-h-screen">
        {/* Hero Section with Background Image */}
        <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 py-20 md:py-32 overflow-hidden">
          {/* <div className="absolute inset-0 z-0 opacity-20">
            <img src="https://via.placeholder.com/1920x1080" alt="Background" className="w-full h-full object-cover" />
          </div> */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-700/80 z-10"></div>
          <div className="container mx-auto px-4 relative z-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8 text-white">
                <div className="inline-block bg-yellow-500 text-blue-900 font-bold px-4 py-1 rounded-full text-sm mb-2">
                  ¡Préstamos rápidos y seguros!
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                  Tu Solución Financiera <span className="text-yellow-400">Confiable</span>
                </h1>
                <p className="text-lg md:text-xl opacity-90">
                Prestamos desde $2.000.000 millones de pesos hasta $200.000.000 millones de pesos con el intereses del 1% con un financiamiento de 12 a 120 meses prestamos para todo tipo de personas reportadas(independientes empleados pensionados amas de casa y estudiantes)
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="https://api.whatsapp.com/send?phone=573224055455&text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20prestamo%20o%20credito" target="_blank" className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold text-lg px-6 py-3 rounded-md flex items-center justify-center">
                    ¡Solicita Ahora! <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                  </Link>
                  <a href="tel:+543224055455" className="border border-white text-white hover:bg-white/10 font-medium text-lg px-6 py-3 rounded-md flex items-center justify-center">
                    <FontAwesomeIcon icon={faPhone} className="mr-2" /> Llámanos
                    
                  </a>
                </div>
                <div className="flex items-center space-x-4 pt-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4, 6].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                        <img
                          src={`${window.location.origin}/clients/${i}.jpeg`}
                          alt="Cliente"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="text-sm">
                    <div className="flex items-center">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <FontAwesomeIcon icon={faStar} key={i} className="w-4 h-4 text-yellow-400" />
                      ))}
                    </div>
                    <p>Más de 10,000 clientes satisfechos</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-2xl">
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-blue-900">¿Cuánto necesitas?</h2>
                  <p className="text-gray-600">Completa el formulario y recibe una respuesta inmediata</p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Nombre completo</label>
                    <input
                      type="text"
                      name='nombre'
                      onChange={(e) => handleChange(e)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Ej: Juan Pérez"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Correo electrónico</label>
                    <input
                      type="email"
                      name='email'
                      onChange={(e) => handleChange(e)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Ej: juan@ejemplo.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Teléfono</label>
                    <input
                      type="tel"
                      name='telefono'
                      onChange={(e) => handleChange(e)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Ej: 300 123 4567"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Monto solicitado</label>
                    <select onChange={(e) => handleSelectChange(e)} name='monto' className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                      <option value={"$1.000.000"}>$1.000.000</option>
                      <option value={"$2.000.000"}>$2.000.000</option>
                      <option value={"$5.000.000"}>$5.000.000</option>
                      <option value={"$10.000.000"}>$10.000.000</option>
                      <option value={"Otro monto"}>Otro monto</option>
                    </select>
                  </div>
                  {/* <button className="w-full block text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 text-lg rounded-md">
                    Solicitar Préstamo
                  </button> */}
                  <Link
                  className="w-full block text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 text-lg rounded-md"
                  to="https://api.whatsapp.com/send?phone=573224055455&text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20prestamo%20o%20credito" target="_blank"
                  >
                    Solicitar Préstamo
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </section>
  
        {/* Features Section with Icons */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">¿Por qué elegirnos?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Ofrecemos las mejores soluciones financieras adaptadas a tus necesidades
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <FontAwesomeIcon icon={faClock} className="w-12 h-12 text-blue-600" />,
                  title: "Rápido y Sencillo",
                  description: "Aprobación en menos de 48 horas y proceso 100% en línea",
                },
                {
                  icon: <FontAwesomeIcon icon={faShieldAlt} className="w-12 h-12 text-blue-600" />,
                  title: "Seguro y Confiable",
                  description: "Tus datos están protegidos con los más altos estándares de seguridad",
                },
                {
                  icon: <FontAwesomeIcon icon={faDollarSign} className="w-12 h-12 text-blue-600" />,
                  title: "Mejores Tasas",
                  description: "Ofrecemos las tasas más competitivas del mercado financiero",
                },
                {
                  icon: <FontAwesomeIcon icon={faThumbsUp} className="w-12 h-12 text-blue-600" />,
                  title: "Sin Complicaciones",
                  description: "Requisitos mínimos y sin trámites burocráticos",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
  
        {/* How It Works Section with Timeline */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">¿Cómo Funciona?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">Obtén tu préstamo en 3 simples pasos</p>
            </div>
            <div className="relative max-w-4xl mx-auto">
              {/* Timeline Line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>
  
              {/* Timeline Items */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Step 1 */}
                <div className="md:text-center md:pr-12 relative">
                  <div className="hidden md:block absolute right-0 top-6 transform translate-x-1/2 w-8 h-8 rounded-full bg-blue-600 border-4 border-white z-10"></div>
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 mb-4 md:ml-auto">
                      <span className="text-blue-600 font-bold text-xl">1</span>
                    </div>
                    <h3 className="text-xl font-bold text-blue-900 mb-2">Solicita tu préstamo</h3>
                    <p className="text-gray-600">
                      Completa el formulario en línea con tus datos personales y el monto que necesitas.
                    </p>
                  </div>
                </div>
  
                <div className="md:hidden h-8"></div>
  
                {/* Step 2 */}
                <div className="md:pl-12 relative md:text-center">
                  <div className="hidden md:block absolute left-0 top-6 transform -translate-x-1/2 w-8 h-8 rounded-full bg-blue-600 border-4 border-white z-10"></div>
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 mb-4">
                      <span className="text-blue-600 font-bold text-xl">2</span>
                    </div>
                    <h3 className="text-xl font-bold text-blue-900 mb-2">Recibe tu aprobación</h3>
                    <p className="text-gray-600">
                      Nuestro equipo evaluará tu solicitud y te dará una respuesta en menos de 48 horas.
                    </p>
                  </div>
                </div>
  
                <div className="md:hidden h-8"></div>
  
                {/* Step 3 */}
                <div className="md:text-center md:pr-12 relative">
                  <div className="hidden md:block absolute right-0 top-6 transform translate-x-1/2 w-8 h-8 rounded-full bg-blue-600 border-4 border-white z-10"></div>
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 mb-4 md:ml-auto">
                      <span className="text-blue-600 font-bold text-xl">3</span>
                    </div>
                    <h3 className="text-xl font-bold text-blue-900 mb-2">Recibe tu dinero</h3>
                    <p className="text-gray-600">
                      El dinero será depositado directamente en tu cuenta bancaria en cuestión de horas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
  
            <div className="text-center mt-12">
              <Link to="https://api.whatsapp.com/send?phone=573224055455&text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20prestamo%20o%20credito" target="_blank" className="w-fit bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg px-6 py-3 rounded-md flex items-center mx-auto">
                ¡Comienza Ahora! <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
              </Link>
            </div>
          </div>
        </section>
  
        {/* Loan Types Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Nuestros Productos Financieros</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">Soluciones adaptadas a cada necesidad</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <FontAwesomeIcon icon={faCreditCard} className="w-10 h-10 text-white" />,
                  title: "Préstamos Personales",
                  description: "Ideal para emergencias, viajes o cualquier gasto imprevisto",
                  amount: "Hasta $200.000.000",
                  color: "bg-gradient-to-r from-blue-600 to-blue-800",
                },
                {
                  icon: <FontAwesomeIcon icon={faLandmark} className="w-10 h-10 text-white" />,
                  title: "Créditos de Libre Inversión",
                  description: "Para proyectos importantes como remodelaciones o estudios",
                  amount: "Hasta $200.000.000",
                  color: "bg-gradient-to-r from-green-600 to-green-800",
                },
                {
                  icon: <FontAwesomeIcon icon={faChartBar} className="w-10 h-10 text-white" />,
                  title: "Préstamos para Negocios",
                  description: "Impulsa tu emprendimiento o expande tu empresa",
                  amount: "Hasta $200.000.000",
                  color: "bg-gradient-to-r from-purple-600 to-purple-800",
                },
              ].map((product, index) => (
                <div
                  key={index}
                  className="rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2"
                >
                  <div className={`${product.color} flex flex-col items-center p-6 text-white`}>
                    <div className="inline-flex mx-auto items-center justify-center  w-16 h-16 rounded-full bg-white/20 mb-4">
                      {product.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{product.title}</h3>
                    <p className="opacity-90 mb-4">{product.description}</p>
                    <div className="text-xl font-bold">{product.amount}</div>
                  </div>
                  <div className="bg-white p-6">
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <FontAwesomeIcon icon={faCheckCircle} className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Sin cuota de manejo</span>
                      </li>
                      <li className="flex items-start">
                        <FontAwesomeIcon icon={faCheckCircle} className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Plazos flexibles de 12 a 120 meses</span>
                      </li>
                      <li className="flex items-start">
                        <FontAwesomeIcon icon={faCheckCircle} className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Aprobación rápida</span>
                      </li>
                    </ul>
                    <Link to="https://api.whatsapp.com/send?phone=573224055455&text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20prestamo%20o%20credito" target="_blank"  className="w-full block text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-md">
                      Solicitar
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
  
        {/* Loan Simulator Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Simula tu Préstamo</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Calcula tu cuota mensual y conoce nuestras excelentes tasas
              </p>
            </div>
            <div className="max-w-5xl mx-auto">
              <LoanSimulator />
            </div>
          </div>
        </section>
  
        {/* Testimonials Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Lo que Dicen Nuestros Clientes</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">Miles de colombianos confían en nosotros</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Carlos Rodríguez",
                  location: "Bogotá",
                  image: `${window.location.origin}/clients/1.jpeg`,
                  quote:
                    "El proceso fue increíblemente rápido. Recibí el dinero en mi cuenta en menos de 24 horas. ¡Excelente servicio!",
                },
                {
                  name: "María González",
                  location: "Medellín",
                  image: `${window.location.origin}/clients/2.jpeg`,
                  quote:
                    "Gracias a este préstamo pude expandir mi negocio. Las tasas son muy competitivas y el proceso es muy sencillo.",
                },
                {
                  name: "Andrés López",
                  location: "Cali",
                  image: `${window.location.origin}/clients/3.jpeg`,
                  quote:
                    "La atención al cliente es excepcional. Resolvieron todas mis dudas y me guiaron durante todo el proceso.",
                },
              ].map((testimonial, index) => (
                <div key={index} className="bg-gray-50 p-8 rounded-xl shadow-md">
                  <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                    {/* <div className="w-12 h-12 rounded-full overflow-hidden mr-4 bg-blue-100">
                      <FontAwesomeIcon
                        icon={faUser}
                        className="w-full h-full object-cover text-blue-900"
                      />
                    </div> */}
                    <div>
                      <h3 className="text-lg font-bold text-blue-900">{testimonial.name}</h3>
                      <p className="text-gray-600">{testimonial.location}</p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <FontAwesomeIcon icon={faStar} key={i} className="w-5 h-5 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>
  
        {/* Stats Section */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {[
                {
                  icon: <FontAwesomeIcon icon={faUsers} className="w-10 h-10 text-yellow-400" />,
                  value: "5.000+",
                  label: "Clientes Satisfechos",
                },
                {
                  icon: <FontAwesomeIcon icon={faDollarSign} className="w-10 h-10 text-yellow-400" />,
                  value: "$2M+",
                  label: "En Préstamos Otorgados",
                },
                {
                  icon: <FontAwesomeIcon icon={faAward} className="w-10 h-10 text-yellow-400" />,
                  value: "10",
                  label: "Años de Experiencia",
                },
                {
                  icon: <FontAwesomeIcon icon={faTrophy} className="w-10 h-10 text-yellow-400" />,
                  value: "99%",
                  label: "Tasa de Aprobación",
                },
              ].map((stat, index) => (
                <div key={index} className="p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-800 mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                  <p className="text-blue-200">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
  
        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Preguntas Frecuentes</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">Resolvemos tus dudas</p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                {[
                  {
                    question: "¿Cuáles son los requisitos para solicitar un préstamo?",
                    answer:
                      "Para solicitar un préstamo necesitas ser mayor de edad, tener ciudadanía colombiana, contar con un ingreso mensual verificable y tener una cuenta bancaria a tu nombre.",
                  },
                  {
                    question: "¿Cuanto tiempo tarda en recibir mi dinero?",
                    answer:
                      "El desembolso se realizara por medio de transferencia bancaria o medios de pagos autorizados de forma inmediata.",
                  },
                  {
                    question: "¿Puedo pagar mi préstamo anticipadamente?",
                    answer:
                      "Sí, puedes realizar pagos anticipados o cancelar tu préstamo en cualquier momento sin penalidades adicionales.",
                  },
                  {
                    question: "¿Qué documentos necesito para solicitar un préstamo?",
                    answer:
                      "Necesitarás tu cédula de ciudadanía, comprobantes de ingresos de los últimos 3 meses, extractos bancarios y un recibo de servicio público reciente.",
                  },
                ].map((faq, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-6 shadow-md">
                    <h3 className="text-xl font-bold text-blue-900 mb-3 flex items-start">
                      <FontAwesomeIcon icon={faLightbulb} className="w-6 h-6 text-yellow-500 mr-2 flex-shrink-0 mt-1" />
                      {faq.question}
                    </h3>
                    <p className="text-gray-700 ml-8">{faq.answer}</p>
                  </div>
                ))}
              </div>
              <div className="text-center mt-10">
                <p className="text-gray-600 mb-4">¿No encuentras la respuesta que buscas?</p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md flex items-center mx-auto">
                  <FontAwesomeIcon icon={faCommentDots} className="mr-2" /> Contáctanos
                </button>
              </div>
            </div>
          </div>
        </section>
  
        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para hacer realidad tus proyectos?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              No esperes más para obtener el préstamo que necesitas con las mejores condiciones del mercado.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="https://api.whatsapp.com/send?phone=573224055455&text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20prestamo%20o%20credito" target="_blank"  className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold text-lg px-6 py-3 rounded-md flex items-center justify-center">
                ¡Solicita Ahora! <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
              </Link>
              {/* <button className="border border-white text-white hover:bg-white/10 font-medium text-lg px-6 py-3 rounded-md flex items-center justify-center">
                <FontAwesomeIcon icon={faHeart} className="mr-2" /> Conoce Más
              </button> */}
            </div>
          </div>
        </section>
      </div>
    )
  }
  
  export default Home
  
  