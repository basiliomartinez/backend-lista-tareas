import { Router } from "express";
import {
  prueba,
  listarTareas,
  crearTarea,
  borrarTarea,
  editarTarea,
} from "../controllers/tareas.controllers.js";
import validacionTarea from "../helpers/validacionTarea.js";
import resultadoValidacion from "../helpers/resultadoValidacion.js";

const router = Router();

// ruta de prueba
router.get("/test", prueba);

// GET - listar tareas
router.get("/", listarTareas);

// POST - crear tarea
router.post("/", validacionTarea, resultadoValidacion, crearTarea);

// DELETE - borrar tarea por id
router.delete("/:id", borrarTarea);

// EDITAR - editar tarea por id
router.put("/:id", validacionTarea, resultadoValidacion, editarTarea);

export default router;
