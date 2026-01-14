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

// POST - crear tarea
export const crearTarea = async (req, res) => {
  try {
    const { tarea } = req.body;

    // validación simple (sin express-validator)
    if (!tarea || tarea.trim().length < 2) {
      return res.status(400).json({ mensaje: "La tarea es obligatoria" });
    }

    const nuevaTarea = new Tarea({ tarea: tarea.trim() });
    await nuevaTarea.save();

    res.status(201).json(nuevaTarea);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al crear la tarea" });
  }
};

// DELETE - borrar tarea
export const borrarTarea = async (req, res) => {
  try {
    const { id } = req.params;

    const tareaBuscada = await Tarea.findById(id);

    if (!tareaBuscada) {
      return res.status(404).json({ mensaje: "Tarea no encontrada" });
    }

    await Tarea.findByIdAndDelete(id);
    res.status(200).json({ mensaje: "Tarea eliminada correctamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al eliminar la tarea" });
  }
};
