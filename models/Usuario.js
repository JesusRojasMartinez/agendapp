import mongoose from "mongoose";

const esquemaUsuario = new mongoose.Schema(
  {
    correo: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    rol: {
      type: String,
      enum: ["admin", "doctor"],
      required: true,
    },
  },
  { timestamps: true }
);
// creando modelo de usaurio
export const Usuario = mongoose.model("Usuario", esquemaUsuario);
