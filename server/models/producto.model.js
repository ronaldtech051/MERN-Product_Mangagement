const mongoose = require('mongoose');

const EsquemaProducto = new mongoose.Schema({
  nombre: {
    //validaciones
    type: String, 
    required: [true, 'Nombre obligatorio.'],
    minLength: [2, "Nombre debe contener 2 caracteres."]
  },
  precio: Number,
  descripcion: {
    type: String, 
    required: [true, 'Descripción obligatorio.'],
    minLength: [5, "Nombre debe contener 5 caracteres."]
  }
}, {timestamps: true, versionKey: false})
//tiempestamps: creando campos de createdAt y updatedAt
//versionKey: false estamos elmiminando el atributi _V

const Producto = mongoose.model("productos", EsquemaProducto);

module.exports=Producto;