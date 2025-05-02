const mongoose = require("mongoose");
const userService = require("../services/user.service.js");

const validId = (req, res, next) => {
    const id = req.params.id;
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).send({ message: "Id inválido"});
    }

    next();
};

const validUser = async (req, res, next) => {
    const id = req.params.id;

    const user = await userService.findById(id);
    
    if (!user) {
        return res.status(400).send({ message: "Usuário não encontrado"});
    }

    req.id = id;
    req.user = user;

    next();
};

module.exports = {validId, validUser};