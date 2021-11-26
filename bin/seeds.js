//1. IMPORTACIONES
const mongoose = require("mongoose")
const Room = require("./../models/Room")

require("dotenv").config()


//2. CONEXIÓN A DATABASE
mongoose.connect("mongodb+srv://abril_ch:BViaa1WBTA8YrrS0@cluster0.zmbxa.mongodb.net/Iron-rooms?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})


//3. DATOS A POBLAR
const rooms = [
    {
        name: "Loft en Valle de Bravo",
        description: "123",
        numberBeds: 2,
        location: "Valle de Bravo",
        photoUrl: "https://a0.muscache.com/im/pictures/adee0066-a3a9-43ee-8c28-a6199d5a7034.jpg?im_w=720"

    },
    {
        name: "Interesante y enigmático cuarto en Cañitas",
        description: "123",
        numberBeds: 1,
        location: "Ciudad de México",
        photoUrl: "https://www.armandoplanes.mx/wp-content/uploads/2018/10/la-moira-google-maps-e.png"
    },
    {
        name: "Romántico cuarto en Tepoztlán",
        description: "123",
        numberBeds: 1,
        location: "Ciudad de México",
        photoUrl: "https://p.bookcdn.com/data/Photos/380x250/3970/397091/397091232/Flor-De-Cera-photos-Exterior-Flor-de-Cera.JPEG"
    },
    {
        name: "Céntrico cuarto en la CDMX",
        description: "123",
        numberBeds: 2,
        location: "Ciudad de México",
        photoUrl: "https://exp.cdn-hotels.com/hotels/9000000/8820000/8819700/8819615/fd4bb814_z.jpg"
    }
]


//4. DECLARAR FUNCIÓN(POBLAR LA BASE DE DATOS)
const createRooms = async () => {
    const newRooms = await Room.create(rooms)
    console.log(newRooms)
    mongoose.connection.close()
}

//5. INVOCACION
createRooms()