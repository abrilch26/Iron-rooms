//1. IMPORTACIONES
const mongoose = require("mongoose")

//2. SCHEMA
const roomSchema = mongoose.Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    numberBeds: {
        type: Number
    },
    location: {
        type: String
    },
    photoUrl: {
        type: String
    }
})


//3. MODELO
const Room = mongoose.model("Rooom", roomSchema)

//EXPORTACIÓN
module.exports = Room