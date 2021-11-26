const Room = require("../models/Room")


//vista de todos los cuartos
exports.viewList = async (req, res) => {
    const allRooms = await Room.find({})

    res.render("rooms/list", {
        rooms: allRooms
    })
}

//vista de un cuarto
exports.viewRoom = async (req, res) => {
	const singleRoomID = req.params.roomID

	const getTheRoom = await Room.findById(singleRoomID)

	res.render("rooms/single", {
		room: getTheRoom
	})


}