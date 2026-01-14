import { Router } from "express";
import { prueba, listarTareas, crearTarea, borrarTarea } from "../controllers/tareas.controllers.js";

const router = Router();

// ruta de prueba
router.get("/test", prueba);

// GET - listar tareas
router.get("/", listarTareas);

// POST - crear tarea
router.post("/", crearTarea);

// DELETE - borrar tarea por id
router.delete("/:id", borrarTarea);

export default router;
