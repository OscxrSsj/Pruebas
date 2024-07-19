import React from "react";
import { useRouter } from "next/router";

const InfringementsList = ({ infringements }) => {
  const router = useRouter();

  const handlePay = async (infringementId, status) => {
    try {
      const response = await fetch("api/infringements/pay", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ infringementId, status }),
      });

      await response.json();

      router.push(`/`);
    } catch (error) {
      alert("Ocurrió un error", error);
    }
  };

  const formatDate = (date) => {
    const formatter = new Intl.DateTimeFormat("en-US", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
    return formatter.format(Date.parse(date));
  };

  // Ordenar las multas por fecha (más reciente primero)
  const sortedInfringements = [...infringements].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="py-3 px-6 border-b text-left">Número de multa</th>
            <th className="py-3 px-6 border-b text-left">Fecha</th>
            <th className="py-3 px-6 border-b text-left">Monto</th>
            <th className="py-3 px-6 border-b text-left">Motivo</th>
            <th className="py-3 px-6 border-b text-left">Estado</th>
            <th className="py-3 px-6 border-b text-left">Pagar</th>
          </tr>
        </thead>
        <tbody>
          {sortedInfringements.map((infringement) => (
            <tr key={infringement._id} className={infringement.status === "Pagada" ? "bg-green-100" : "bg-red-100"}>
              <td className="py-3 px-6 border-b">{infringement.numberPlate}</td>
              <td className="py-3 px-6 border-b">{formatDate(infringement.createdAt)}</td>
              <td className="py-3 px-6 border-b">${infringement.amount}</td>
              <td className="py-3 px-6 border-b">{infringement.reason}</td>
              <td className={`py-3 px-6 border-b ${infringement.status === "Pagada" ? "text-green-500" : "text-red-500"}`}>{infringement.status}</td>
              <td className="py-3 px-6 border-b">
                <button
                  onClick={() => handlePay(infringement._id, "Pagada")}
                  className="text-blue-500"
                >
                  Pagar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InfringementsList;
