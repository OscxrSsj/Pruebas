import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { FiLogOut } from "react-icons/fi";
import InfringementsList from "../infringements/list";
import InfringementsForm from "../infringements/form";

const Navigation = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [nombre, setNombre] = useState("");
  const [tipoUsuario, setTipoUsuario] = useState("");
  const [showLogoutMenu, setShowLogoutMenu] = useState(false);
  const [showInfringements, setShowInfringements] = useState(false);
  const [infringements, setInfringements] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const storedNombre = localStorage.getItem("nombre");
    const storedTipoUsuario = localStorage.getItem("tipoUsuario");
    if (storedNombre) {
      setNombre(storedNombre);
      setTipoUsuario(storedTipoUsuario);
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = async () => {
    localStorage.removeItem("token");
    localStorage.removeItem("nombre");
    localStorage.removeItem("rut");
    localStorage.removeItem("tipoUsuario");
    setIsLoggedIn(false);
    setNombre("");
    setTipoUsuario("");
    setShowLogoutMenu(false);
    setShowInfringements(false);
    router.push("/login");
  };

  const handleNombreClick = () => {
    setShowLogoutMenu((prev) => !prev);
  };

  const handleViewInfringements = async () => {
    const token = localStorage.getItem("token");
    const response = await fetch("/api/infringements", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    if (response.ok) {
      setInfringements(data);
      setShowInfringements(true);
    }
  };

  return (
    <div>
      <header className="bg-white shadow-md">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <img className="h-10 w-15" src="/Logo.png" alt="Logo" />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => console.log("Abrir menú móvil")}
            >
              <span className="sr-only">Open main menu</span>
            </button>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            {isLoggedIn && (
              <div className="relative">
                <button
                  className="text-sm font-semibold leading-6 text-gray-900 focus:outline-none"
                  onClick={handleNombreClick}
                >
                  {nombre} <span className="ml-1">&#9660;</span>
                </button>
                {showLogoutMenu && (
                  <div className="absolute top-8 right-0 mt-2 w-48 bg-white border rounded-md shadow-lg">
                    <button
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={handleViewInfringements}
                    >
                      Ver Multas
                    </button>
                    <button
                      className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                      onClick={handleLogout}
                    >
                      <FiLogOut className="inline mr-1" /> Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </nav>
      </header>

      <main className="bg-white min-h-screen">
        <section className="bg-black text-white py-12">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="lg:flex lg:justify-between lg:items-center">
              <div className="lg:w-1/2">
                <h1 className="text-3xl lg:text-5xl font-bold">
                  Paga Tus Multas de Tránsito
                </h1>
                <p className="mt-4 text-lg">
                  Nuestra plataforma hace que sea fácil buscar y pagar tus
                  multas de tránsito pendientes. Evita cargos adicionales y
                  mantén tu historial de manejo limpio. Con una interfaz
                  intuitiva y accesible, puedes gestionar tus multas de manera
                  rápida y segura desde cualquier lugar. Además, ofrecemos
                  opciones de pago flexibles y recibos instantáneos para que
                  tengas un registro inmediato de tus transacciones. Utilizar
                  nuestra plataforma te ahorra tiempo y esfuerzo, brindándote
                  una solución eficiente para mantener tus obligaciones al día y
                  evitar inconvenientes futuros.
                </p>
              </div>
              <div className="lg:w-1/2 mt-10 lg:mt-0">
                <img
                  src="/foto01.png"
                  alt="Ejemplo"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-semibold text-gray-800 text-center">
              ¿Por Qué Usar Nuestra Plataforma?
            </h2>
            <div className="mt-8 flex flex-col lg:flex-row lg:space-x-6 space-y-6 lg:space-y-0">
              <div className="bg-white rounded-lg p-6 shadow-lg flex-1">
                <h3 className="text-xl font-semibold text-gray-800">
                  Búsqueda Fácil
                </h3>
                <p className="mt-2 text-gray-600">
                  Busca rápidamente tus multas de tránsito pendientes usando tu
                  número de citación o placa.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-lg flex-1">
                <h3 className="text-xl font-semibold text-gray-800">
                  Pago Seguro
                </h3>
                <p className="mt-2 text-gray-600">
                  Paga tus multas de manera segura con tu tarjeta de crédito u
                  otros métodos de pago.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-lg flex-1">
                <h3 className="text-xl font-semibold text-gray-800">
                  Recibos Instantáneos
                </h3>
                <p className="mt-2 text-gray-600">
                  Recibe un recibo instantáneo de tu pago para mantener tus
                  registros.
                </p>
              </div>
            </div>
          </div>
        </section>

        {showInfringements && (
          <section className="p-4 bg-white rounded-md shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Mis Multas</h2>
            <InfringementsList infringements={infringements} />
          </section>
        )}

        {isLoggedIn && tipoUsuario === "administrador" && (
          <section className="p-4 bg-white rounded-md shadow-md mt-6">
            <h2 className="text-2xl font-semibold mb-4">
              Registrar Infracción
            </h2>
            <InfringementsForm />
          </section>
        )}
      </main>
    </div>
  );
};

export default Navigation;
