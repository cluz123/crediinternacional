import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Home from "./components/Home"
import Header from "./components/Header"
import Footer from "./components/Footer"
import About from "./components/About"
import Contact from "./components/Contact"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import argentina from "./style/argentina.jpg";
import { useEffect, useState } from "react"

function App() {
  // function compararFechas() {
  //   const fechaActual: Date = new Date();

  //   const fechaObjetivo: Date = new Date('2025-04-03');

  //   const diferenciaEnMilisegundos = fechaActual.getTime() - fechaObjetivo.getTime();

  //   const diferenciaEnDias = diferenciaEnMilisegundos / (1000 * 60 * 60 * 24);

  //   return Math.round(diferenciaEnDias);
  // }

  // const [daysLeft, setDaysLeft] = useState<number>(-10);

  // useEffect(() => {
  //   setDaysLeft(compararFechas());
  // }, [])


  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* <div className={`w-[100vw] h-[100vh] fixed z-[100000] ${daysLeft <= 0 ? "hidden" : `block`}`}>
          <img style={{ opacity: `${daysLeft <= 10 ? daysLeft * 10 : 100}%` }} className={`w-[100vw] h-[100vh]  ${daysLeft < 0 ? "hidden" : ``}`} src={argentina} />
        </div> */}
        <Header />
        <main className="flex-grow">
          <Link target="_blank" to="https://api.whatsapp.com/send?phone=573224055455&text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20prestamo%20o%20credito" className="text-white text-[45px] w-[65px] h-[65px] border-2 border-green-400 bg-green-400 flex items-center justify-center rounded-[100%] fixed z-[1000] bottom-[65px] right-[25px]">
            <FontAwesomeIcon icon={faWhatsapp} />
          </Link>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nosotros" element={<About />} />
            <Route path="/contacto" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
