// pages/api/logout.js
export default function logoutHandler(req, res) {
  if (req.method === 'POST') {
    res.setHeader('Set-Cookie', 'token=; Max-Age=0; Path=/; HttpOnly');
    return res.status(200).json({ message: 'Sesión cerrada exitosamente' });
  } else {
    return res.status(405).json({ message: 'Method not allowed' });
  }
}
