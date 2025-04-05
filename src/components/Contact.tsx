import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faClock, faEnvelope, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';
import { useState } from 'react';



const Contact = () => {

  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: '',
  });

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleTextareaChange = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    // Haciendo el cast explícito a HTMLFormElement
    const form = e.target as HTMLFormElement;
  
    emailjs
      .sendForm('service_l905xjp', 'template_p7hcsxr', form, 'o3eP2vCkKlvXr6R7k')
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
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 py-20">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src="https://via.placeholder.com/1920x400" alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-700/80 z-10"></div>
        <div className="container mx-auto px-4 relative z-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contáctanos</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Estamos aquí para responder tus preguntas y ayudarte con tus necesidades financieras.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="border-0 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden bg-white">
              <div className="bg-blue-600 h-2"></div>
              <div className="text-center pt-8">
                <div className="mx-auto bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <FontAwesomeIcon icon={faPhone} className="text-blue-600 w-8 h-8" />
                </div>
                <h3 className="text-blue-900 text-xl font-bold">Llámanos</h3>
                <p className="text-gray-600">Lunes a Viernes: 8am - 6pm</p>
              </div>
              <div className="text-center pt-8">
                <p className="font-medium text-lg text-blue-900">+57 (322) 4055455</p>
              </div>
            </div>

            <div className="border-0 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden bg-white">
              <div className="bg-yellow-500 h-2"></div>
              <div className="text-center pt-8">
                <div className="mx-auto bg-yellow-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <FontAwesomeIcon icon={faEnvelope} className="text-yellow-600 w-8 h-8" />
                </div>
                <h3 className="text-blue-900 text-xl font-bold">Escríbenos</h3>
                <p className="text-gray-600">Respuesta en 24 horas</p>
              </div>
              <div className="text-center pt-8">
                <p className="font-medium text-lg text-blue-900">crediinternacional2025@gmail.com</p>
              </div>
            </div>

            <div className="border-0 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden bg-white">
              <div className="bg-green-500 h-2"></div>
              <div className="text-center pt-8">
                <div className="mx-auto bg-green-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="text-green-600 w-8 h-8" />
                </div>
                <h3 className="text-blue-900 text-xl font-bold">Visítanos</h3>
                <p className="text-gray-600">Oficina Principal</p>
              </div>
              <div className="text-center p-8">
                <p className="font-medium text-lg text-blue-900">calle 85 #19B-22</p>
                <p className="font-medium text-lg text-blue-900">Bogotá, Colombia</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-blue-900 mb-6">¿Tienes alguna pregunta?</h2>
                <p className="text-gray-600 mb-8">
                  Completa el formulario y nos pondremos en contacto contigo lo antes posible. Nuestro equipo de
                  expertos financieros está listo para ayudarte.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <FontAwesomeIcon icon={faClock} className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-blue-900 mb-1">Horario de atención</h3>
                      <p className="text-gray-600">Lunes a Viernes: 8:00 AM - 6:00 PM</p>
                      <p className="text-gray-600">Sábados: 8:00 AM - 15:00 PM</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <FontAwesomeIcon icon={faMapMarkerAlt} className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-blue-900 mb-1">Oficinas principales</h3>
                      <p className="text-gray-600">Bogotá: calle 85 #19B-22</p>
                    </div>
                  </div>
                </div>

                {/* <div className="mt-12">
                  <img
                    src="https://via.placeholder.com/500x300"
                    alt="Mapa de ubicación"
                    className="rounded-lg shadow-md w-full"
                  />
                </div> */}
              </div>

              <div>
                <div className="border-0 rounded-xl shadow-xl overflow-hidden bg-white">
                  <div className="bg-blue-900 text-white p-6">
                    <h3 className="text-2xl font-bold mb-2">Envíanos un mensaje</h3>
                    <p className="text-blue-200">Completa el formulario y te responderemos a la brevedad</p>
                  </div>
                  <div className="p-6">
                    <form onSubmit={(e) => handleSubmit(e)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="nombre" className="text-blue-900 font-medium">
                            Nombre
                          </label>
                          <input
                            onChange={(e) => handleChange(e)}
                            id="nombre"
                            name="nombre"
                            value={formData.nombre}
                            placeholder="Tu nombre"
                            className="w-full border-2 border-blue-100 focus:border-blue-500 rounded-md px-4 py-2 focus:outline-none"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="apellido" className="text-blue-900 font-medium">
                            Apellido
                          </label>
                          <input
                            onChange={(e) => handleChange(e)}
                            id="apellido"
            name="apellido"
            value={formData.apellido}
                            placeholder="Tu apellido"
                            className="w-full border-2 border-blue-100 focus:border-blue-500 rounded-md px-4 py-2 focus:outline-none"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-blue-900 font-medium">
                            Correo electrónico
                          </label>
                          <input
                            onChange={(e) => handleChange(e)}
                            name="email"
                            value={formData.email}
                            id="email"
                            type="email"
                            placeholder="tu@email.com"
                            className="w-full border-2 border-blue-100 focus:border-blue-500 rounded-md px-4 py-2 focus:outline-none"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="telefono" className="text-blue-900 font-medium">
                            Teléfono
                          </label>
                          <input
                            onChange={(e) => handleChange(e)}
                            id="telefono"                            
            name="telefono"
            value={formData.telefono}
                            placeholder="Tu número de teléfono"
                            className="w-full border-2 border-blue-100 focus:border-blue-500 rounded-md px-4 py-2 focus:outline-none"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="asunto" className="text-blue-900 font-medium">
                          Asunto
                        </label>
                        <input
                          onChange={(e) => handleChange(e)}
                          id="asunto"
            name="asunto"
            value={formData.asunto}
                          placeholder="Asunto de tu mensaje"
                          className="w-full border-2 border-blue-100 focus:border-blue-500 rounded-md px-4 py-2 focus:outline-none"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="mensaje" className="text-blue-900 font-medium">
                          Mensaje
                        </label>
                        <textarea
                          onChange={(e) => handleTextareaChange(e)}
                          id="mensaje"
            name="mensaje"
            value={formData.mensaje}
                          placeholder="Escribe tu mensaje aquí"
                          rows={5}
                          className="w-full border-2 border-blue-100 focus:border-blue-500 rounded-md px-4 py-2 focus:outline-none"
                        />
                      </div>
                      {/* <button
                        type="submit"
                        
                        className="w-full bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold text-lg h-12 rounded-md flex items-center justify-center"
                      >
                        Enviar mensaje <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                      </button> */}
                      <Link
                      className="w-full bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold text-lg h-12 rounded-md flex items-center justify-center"
                      to="https://api.whatsapp.com/send?phone=573224055455&text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20prestamo%20o%20credito" target="_blank"
                      >
                        Enviar mensaje <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                      </Link>
                    </form>
                  </div>
                </div>
              </div>
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
          <Link to="https://api.whatsapp.com/send?phone=573224055455&text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20prestamo%20o%20credito" target="_blank" className="w-fit bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold text-lg px-6 py-3 rounded-md flex items-center mx-auto">
            ¡Solicita Ahora! <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Contact

