// ./routes/index.js

const express	= require("express")
const router	= express.Router()

const indexController	= require("./../controllers/indexController")


//HOME 
router.get("/", indexController.home)

//SIGNUP
router.get("/signup", indexController.viewSignup)
router.post("/signup", indexController.signup)

//LOGIN
router.get("/login", indexController.viewLogin)
router.post("/login", indexController.login)


// CERRAR SESION
//pendiente


//EXPORTACIÓN
module.exports = router