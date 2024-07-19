import clientPromise from './mongodb';

export default async function signUpHandler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { rut, password, nombre, apellido, correo, tipoUsuario } = req.body;

  try {
    const client = await clientPromise;
    const db = client.db('pago-mi-parte');
    const usersCollection = db.collection('users');

    const existingUser = await usersCollection.findOne({ rut });

    if (existingUser) {
      return res.status(400).json({ message: 'El usuario ya existe' });
    }

    const newUser = { rut, password, nombre, apellido, correo, tipoUsuario };
    const result = await usersCollection.insertOne(newUser);

    res.status(201).json({ message: 'Usuario registrado exitosamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
}
