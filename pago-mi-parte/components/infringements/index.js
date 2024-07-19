import React from "react";
import Navigation from "../main";

const Infringements = ({ infringements, numberPlate: initialNumberPlate }) => {
  return (
    <div className="bg-gray-200 min-h-screen flex flex-col">
      <Navigation />
      <div className="relative isolate px-4 flex-grow">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="w-full py-20 bg-gray-200">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-black">Sobre Nosotros</h2>
            <p className="mt-4 text-lg text-gray-800">
              En nuestra plataforma, nos dedicamos a facilitar el proceso de pago de multas de tráfico.
              Nuestro objetivo es proporcionar una plataforma segura, rápida y conveniente para que
              puedas gestionar tus pagos desde cualquier lugar y en cualquier momento. Con una interfaz
              intuitiva, te ayudamos a evitar filas y mantener tu historial de manejo limpio. Confía en
              nosotros para simplificar tu vida con nuestra app web diseñada para tu conveniencia.
            </p>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
          Noticias Recientes
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-100 rounded-lg shadow-md p-4">
            <img src="/noticia1.png" alt="Noticia 1" className="rounded-lg mb-4 w-full h-48 object-cover" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Principales Multas de Tránsito en 2024: ¿Cuáles Son y Cómo Evitarlas?</h3>
            <p className="text-gray-600">Este año, las multas por exceso de velocidad, uso del celular al conducir y estacionamiento indebido encabezan la lista de infracciones de tránsito más comunes. Conoce las sanciones y cómo puedes evitar ser multado siguiendo estos simples consejos.</p>
          </div>
          <div className="bg-gray-100 rounded-lg shadow-md p-4">
            <img src="/noticia2.png" alt="Noticia 2" className="rounded-lg mb-4 w-full h-48 object-cover" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">¿Qué Hacer si Me Sacan una Multa? Usa Pago Mi Parte para Facilitar el Proceso</h3>
            <p className="text-gray-600">Recibir una multa de tránsito puede ser frustrante, pero hay formas de manejarlo eficientemente. Pago Mi Parte te ayuda a dividir el costo de la multa entre tus compañeros de viaje y a gestionar el pago de manera rápida y sencilla.</p>
          </div>
          <div className="bg-gray-100 rounded-lg shadow-md p-4">
            <img src="/noticia3.png" alt="Noticia 3" className="rounded-lg mb-4 w-full h-48 object-cover" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2"> Innovación en Seguridad Vial: Nuevos Dispositivos que Transformarán la Conducción</h3>
            <p className="text-gray-600">La tecnología sigue avanzando y el sector del transporte no se queda atrás. Nuevos dispositivos de seguridad vial, como sensores de fatiga y sistemas de frenado automático, prometen reducir accidentes y salvar vidas. Descubre cómo estas innovaciones están cambiando la forma en que conducimos.</p>
          </div>
        </div>
      </div>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-2">Contacto</h3>
            <p>Bravo de Saravia 2980, Renca, Santiago Chile</p>
            <p>+56 (9) 61192122</p>
            <p>pagomiparte@icloud.com</p>
          </div>
        </div>
        <div className="container mx-auto text-center mt-8">
          &copy; 2024 PagoMiParte. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
};

export default Infringements;
