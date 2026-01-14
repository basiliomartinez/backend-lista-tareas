import mongoose, { Schema } from "mongoose";

const tareaSchema = new Schema(
  {
    tarea: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 100,
      trim: true,
    },
  },
  { timestamps: true }
);

const Tarea = mongoose.model("tarea", tareaSchema);

export default Tarea;
