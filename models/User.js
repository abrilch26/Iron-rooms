//IMPORTACIONES
const mongoose = require ("mongoose")

//SCHEMA
const userSchema = mongoose.Schema ({
    mail: {
        type: String,
        required: [true, "Email es requerido."],
        match: [/^\S+@\S+\.\S+$/, "Por favor, ingresa un email válido."],
        //unique: true,
        lowercase: true, 
        trim: true 
    },
    passwordEncriptado: String
})

//MODELO
const User = mongoose.model("User", userSchema)
 
//EXPORTACIÓN
module.exports = User