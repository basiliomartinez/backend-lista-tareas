import { body } from "express-validator";

const validacionTarea = [
  body("tarea")
    .notEmpty()
    .withMessage("La tarea es obligatoria")
    .bail()
    .isLength({ min: 2, max: 100 })
    .withMessage("La tarea debe tener entre 2 y 100 caracteres")
    .trim(),
];

export default validacionTarea;
