import React, { useState } from "react";
import { useRouter } from "next/router";

const Login = () => {
  const [loginFormData, setLoginFormData] = useState({
    rut: "",
    password: "",
  });
  const [signupFormData, setSignupFormData] = useState({
    rut: "",
    password: "",
    nombre: "",
    apellido: "",
    correo: "",
    tipoUsuario: "usuario",
  });
  const [loginError, setLoginError] = useState("");
  const [signupError, setSignupError] = useState("");
  const [signupSuccess, setSignupSuccess] = useState("");
  const [showSignup, setShowSignup] = useState(false);
  const router = useRouter();

  const handleInputChange = (event, setFormData) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleLoginFormSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginFormData),
    });
    const data = await response.json();
    if (response.ok) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("nombre", data.nombre);
      localStorage.setItem("tipoUsuario", data.tipoUsuario);
      router.push("/");
    } else {
      setLoginError(data.message);
    }
  };

  const handleSignupFormSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signupFormData),
    });
    const data = await response.json();
    if (response.ok) {
      setSignupSuccess("Usuario registrado exitosamente");
      setSignupError("");
      setShowSignup(false);
    } else {
      setSignupError(data.message);
      setSignupSuccess("");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-md shadow-md max-w-sm w-full">
        {showSignup ? (
          <>
            <h2 className="text-2xl font-semibold mb-4">Registro</h2>
            {signupError && <p className="text-red-500 mb-4">{signupError}</p>}
            {signupSuccess && <p className="text-green-500 mb-4">{signupSuccess}</p>}
            <form onSubmit={handleSignupFormSubmit}>
              <div className="mb-4">
                <label htmlFor="signupRut" className="block text-sm font-semibold">
                  RUT:
                </label>
                <input
                  type="text"
                  id="signupRut"
                  name="rut"
                  className="border border-gray-300 px-3 py-2 rounded-md w-full"
                  value={signupFormData.rut}
                  onChange={(e) => handleInputChange(e, setSignupFormData)}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="signupPassword" className="block text-sm font-semibold">
                  Contraseña:
                </label>
                <input
                  type="password"
                  id="signupPassword"
                  name="password"
                  className="border border-gray-300 px-3 py-2 rounded-md w-full"
                  value={signupFormData.password}
                  onChange={(e) => handleInputChange(e, setSignupFormData)}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="signupNombre" className="block text-sm font-semibold">
                  Nombre:
                </label>
                <input
                  type="text"
                  id="signupNombre"
                  name="nombre"
                  className="border border-gray-300 px-3 py-2 rounded-md w-full"
                  value={signupFormData.nombre}
                  onChange={(e) => handleInputChange(e, setSignupFormData)}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="signupApellido" className="block text-sm font-semibold">
                  Apellido:
                </label>
                <input
                  type="text"
                  id="signupApellido"
                  name="apellido"
                  className="border border-gray-300 px-3 py-2 rounded-md w-full"
                  value={signupFormData.apellido}
                  onChange={(e) => handleInputChange(e, setSignupFormData)}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="signupCorreo" className="block text-sm font-semibold">
                  Correo:
                </label>
                <input
                  type="email"
                  id="signupCorreo"
                  name="correo"
                  className="border border-gray-300 px-3 py-2 rounded-md w-full"
                  value={signupFormData.correo}
                  onChange={(e) => handleInputChange(e, setSignupFormData)}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="signupTipoUsuario" className="block text-sm font-semibold">
                  Tipo de Usuario:
                </label>
                <select
                  id="signupTipoUsuario"
                  name="tipoUsuario"
                  className="border border-gray-300 px-3 py-2 rounded-md w-full"
                  value={signupFormData.tipoUsuario}
                  onChange={(e) => handleInputChange(e, setSignupFormData)}
                  required
                >
                  <option value="usuario">Usuario</option>
                  <option value="administrador">Administrador</option>
                </select>
              </div>
              <div className="flex justify-end">
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
                  Registrarse
                </button>
              </div>
              <div className="mt-4 text-center">
                <a
                  href="#"
                  className="text-sm font-semibold text-blue-500"
                  onClick={() => setShowSignup(false)}
                >
                  ¿Ya tienes una cuenta? Inicia sesión
                </a>
              </div>
            </form>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-semibold mb-4">Inicio de sesión</h2>
            {loginError && <p className="text-red-500 mb-4">{loginError}</p>}
            <form onSubmit={handleLoginFormSubmit}>
              <div className="mb-4">
                <label htmlFor="rut" className="block text-sm font-semibold">
                  RUT:
                </label>
                <input
                  type="text"
                  id="rut"
                  name="rut"
                  className="border border-gray-300 px-3 py-2 rounded-md w-full"
                  value={loginFormData.rut}
                  onChange={(e) => handleInputChange(e, setLoginFormData)}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-semibold">
                  Contraseña:
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="border border-gray-300 px-3 py-2 rounded-md w-full"
                  value={loginFormData.password}
                  onChange={(e) => handleInputChange(e, setLoginFormData)}
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-md"
                >
                  Iniciar sesión
                </button>
              </div>
              <div className="mt-4 text-center">
                <a
                  href="#"
                  className="text-sm font-semibold text-blue-500"
                  onClick={() => setShowSignup(true)}
                >
                  ¿No tienes una cuenta? Regístrate
                </a>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
