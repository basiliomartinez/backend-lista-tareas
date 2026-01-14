import Tarea from "../models/tarea.js";

// GET - listar tareas
export const listarTareas = async (req, res) => {
  try {
    const tareas = await Tarea.find().sort({ createdAt: -1 });
    res.status(200).json(tareas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al listar tareas" });
  }
};

// ruta de prueba (la dejamos por ahora)
export const prueba = (req, res) => {
  res.send("Backend Lista de Tareas funcionando OK");
};
