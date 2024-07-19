import clientPromise from "../mongodb";
import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Token no proporcionado' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (decoded.tipoUsuario !== "administrador") {
      return res.status(403).json({ message: 'Acceso denegado' });
    }

    const { rut, numberPlate, amount, reason } = req.body;

    const client = await clientPromise;
    const db = client.db("pago-mi-parte");

    const newInfringement = {
      rut,
      numberPlate: numberPlate,
      amount: amount,
      status: "Pendiente",
      reason: reason,
      createdAt: new Date(),
    };

    const infringement = await db
      .collection("infringements")
      .insertOne(newInfringement);

    res.status(201).json(JSON.parse(JSON.stringify(infringement)));
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Internal server error" });
  }
}
