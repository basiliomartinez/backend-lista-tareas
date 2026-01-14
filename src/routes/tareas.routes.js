import { Router } from "express";
import { prueba, listarTareas } from "../controllers/tareas.controllers.js";

const router = Router();

// ruta de prueba
router.get("/test", prueba);

// GET - listar tareas
router.get("/", listarTareas);

export default router;
