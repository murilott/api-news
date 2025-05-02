const mongoose = require("mongoose");
const userService = require("../services/user.service.js");

const validId = (req, res, next) => {
    const id = req.params.id;
    
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).send({ message: "Usuário não encontrdao"});
        }
}

const validUser = (req, res, next) => {};

module.exports = {validId};