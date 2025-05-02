const userService = require("../services/user.service.js");
const mongoose = require("mongoose");

// const soma = (req, res) => {
//     const soma = 2 + 8;

//     res.send({soma: soma})
// };

// const soma2 = (req, res) => {
//     const soma = 50 + 50;

//     res.send({soma: soma})
// };

const create = async (req, res) => {
    const{name, username, email, password, avatar, background} = req.body;

    if (!name || !username || !email || !password || !avatar || !background){
        res.status(400).send({
            message: "Preencha todos os campos para registro"});
    }

    const user = await userService.create(req.body);

    if (!user) {
        return res.status(400).send({message: "Erro ao criar usuário"});
    }

    res.status(201).send({
        message: "Usuário criado com sucesso",
        user: {
            id: user._id,
            name,
            username,
            email,
            avatar,
            background
        }
    });
}

const findAll = async (req, res) => {
    const users = await userService.findAll();

    if (users.lenght === 0) {
        return res.status(400).send({ message: "Não há usuários cadastrados"})
    }

    res.send(users);
}

const findById = async (req, res) => {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).send({ message: "Usuário não encontrdao"});
    }

    const user = await userService.findById(id);

    if (!user) {
        return res.status(400).send({ message: "Usuário não encontrdao"});
    }

    res.send(user);
}

module.exports = {create, findAll, findById};