import clientPromise from "../mongodb";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  const { infringementId, status } = req.body;

  try {
    const client = await clientPromise;
    const db = client.db("pago-mi-parte");

    const query = { _id: new ObjectId(infringementId) };
    const update = { $set: { status: status || "Pagado" } };
    const options = { returnOriginal: false };

    const infringement = await db
      .collection("infringements")
      .findOneAndUpdate(query, update, options);

    res.status(200).json(JSON.parse(JSON.stringify(infringement)));
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Internal server error" });
  }
}
