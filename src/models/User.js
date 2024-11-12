import { Schema, model } from 'mongoose'

const usuariosSchema = new Schema({
  explorador: {
    type: String,
    required: true,
    trim: true
  },
  ip: {
    type: String,
    required: true,
    trim: true
  }
}, { timestamps: true })

export default model('Usuarios', usuariosSchema)
