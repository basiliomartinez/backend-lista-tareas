import { Router } from "express";
import { prueba } from "../controllers/tareas.controllers.js";

const router = Router();

// ruta de prueba
router.get("/test", prueba);

export default router;
