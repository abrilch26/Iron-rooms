const express = require("express")
const router = express.Router()

const roomsController = require("./../controllers/roomsController")

//CRUD

//1.1 CREATE
//1.1.1 Vista del formulario
//1.1.2 

//1.2 READ
//1.2.1 Listado de cuartos
//a. Vista
router.get("/", roomsController.viewList)

//1.2.2 Mostrar detalles de cada cuarto
router.get("/:roomID", roomsController.viewRoom)


//1.3 Update
//1.3.1 editar un cuarto


//1.4Delete



//LISTADO DE CUARTOS

//MUESTRA E UN CUARTO

//MUESTRA DE LOS DELTALLES DE UN CUARTO


module.exports = router