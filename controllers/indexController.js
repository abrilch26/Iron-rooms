const User = require ("./../models/User")
const bcryptjs = require ("bcryptjs")

//HOME
exports.home = async (req, res) => {
    res.render("home")
}

//LOGIN - ACCEDER
exports.viewLogin = async (req, res) => {
    res.render("login")
}

exports.login = async (req, res) => {
    res.render()
}


// REGISTER - SIGNUP
exports.viewSignup = async (req, res) => {
    res.render("signup")
}

exports.signup = async (req, res) => {
    console.log(req.body)
    //obtener datos
    const mail = req.body.mail
    const password = req.body.password

    //validación1:  datos completos
    if(!mail || !password) {
        res.render("signup", {
            errorMessage: "Uno o más campos están vacios"
        })
        return
    }
    //validacion 2: strong password
    const regex =  /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/
	if(!regex.test(password)){
		res.render("signup", {
			errorMessage: "Tu password debde de contener 6 caracteres, mínimo un númeroy una mayúscula"
		})
		return
	} 

    try {
		const salt = await bcryptjs.genSalt(10)
		const passwordEncriptado = await bcryptjs.hash(password, salt)
		
        console.log(mail, passwordEncriptado)
		const newUser = await User.create({
			mail,
			passwordEncriptado
		})
       

		//3. REDIRECCIÓN DEL USUARIO
		res.redirect("/")
	} catch (error) {
        
        res.status(500).render("signup", {
			errorMessage: "Hubo un error con la validez de tu correo. Intenta nuevamente. No dejes espacios en blanco y utiliza minúsculas"
		})
	}

}
