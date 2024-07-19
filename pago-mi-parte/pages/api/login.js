import clientPromise from './mongodb';
import jwt from 'jsonwebtoken';

export default async function loginHandler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { rut, password } = req.body;

  try {
    const client = await clientPromise;
    const db = client.db('pago-mi-parte');
    const usersCollection = db.collection('users');

    const user = await usersCollection.findOne({ rut });

    if (!user) {
      return res.status(404).json({ message: 'Cuenta no existe' });
    }

    if (user.password !== password) {
      return res.status(401).json({ message: 'Contraseña incorrecta' });
    }

    const token = jwt.sign(
      { nombre: user.nombre, tipoUsuario: user.tipoUsuario, rut: user.rut },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.status(200).json({
      message: 'Inicio de sesión exitoso',
      token,
      nombre: user.nombre,
      tipoUsuario: user.tipoUsuario,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
}
