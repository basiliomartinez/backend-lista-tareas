import mongoose from "mongoose";

const conectarBD = async () => {
  try {
    if (!process.env.MONGODB) {
      console.warn("⚠️ MONGODB no configurado. Servidor OK sin conexión a la BD.");
      return;
    }

    await mongoose.connect(process.env.MONGODB);
    console.info("✅ BD conectada correctamente");
  } catch (error) {
    console.error("❌ Error al conectar a la BD:", error.message);
  }
};

conectarBD();

export default mongoose;
