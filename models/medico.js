const { Schema, model } = require('mongoose');


const MedicoSchema = Schema({

    nombre: {
        type: String,
        required: true
    },
    registro:{
        type: String,
    },
    celular:{
        type: String,
    },
    img: {
        type: String,
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario'
    }
},
{
    collection: 'hospitales'
})

MedicoSchema.method('toJSON', function () {
    const { __v, ...object }= this.toObject();
       
        return object;
})

module.exports = model('Medico', MedicoSchema); 