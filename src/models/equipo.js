import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const equipoSchema = new Schema({
  nombre: {
    type: String,
    required: true
  },
  estadio: {
    type: String,
    required: true
  },
  fecha_fundacion: {
    type: Date,
    required: true
  }
});

module.exports = mongoose.model('Equipo', equipoSchema);