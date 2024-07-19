import React, { useState } from "react";
import { useRouter } from "next/router";
import { FaSearch } from "react-icons/fa";

const InfringementsForm = () => {
  const [rut, setRut] = useState("");
  const [numberPlate, setNumberPlate] = useState("");
  const [amount, setAmount] = useState("");
  const [reason, setReason] = useState("");
  const router = useRouter();

  const handleCreate = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem("token");

    try {
      const response = await fetch("api/infringements/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({ rut, numberPlate, amount, reason }),
      });

      if (response.ok) {
        await response.json();
        router.push(`/`);
      } else {
        alert("No tienes permisos para realizar esta acción.");
      }
    } catch (error) {
      alert("Ocurrió un error", error);
    }
  };

  return (
    <form className="mt-6 flex gap-x-4" onSubmit={handleCreate}>
      <label className="sr-only">RUT</label>
      <input
        name="rut"
        required
        className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6 bg-white"
        placeholder="Ingrese RUT"
        onChange={(event) => setRut(event.target.value)}
      />
      <label className="sr-only">Patente</label>
      <input
        name="numberPlate"
        required
        className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6 bg-white"
        placeholder="Ingrese Patente"
        onChange={(event) => setNumberPlate(event.target.value)}
      />
      <input
        name="reason"
        required
        className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6 bg-white"
        placeholder="Ingrese Razón"
        onChange={(event) => setReason(event.target.value)}
      />
      <input
        name="amount"
        required
        className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6 bg-white"
        placeholder="Ingrese Monto"
        onChange={(event) => setAmount(event.target.value)}
      />
      <button
        type="submit"
        className="flex-none rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold shadow-sm hover:bg-blue-400 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
      >
        Registrar Infraccion
      </button>
    </form>
  );
};

export default InfringementsForm;

