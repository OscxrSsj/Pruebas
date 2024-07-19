import clientPromise from "../mongodb";
import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Token no proporcionado' });
  }

  try {
    jwt.verify(token, process.env.JWT_SECRET);

    const { rut } = jwt.decode(token); // Decodificar el token para obtener el RUT del usuario

    const client = await clientPromise;
    const db = client.db("pago-mi-parte");

    const infringements = await db
      .collection("infringements")
      .find({ rut })
      .toArray();

    res.status(200).json(infringements);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Internal server error" });
  }
}

