const userService = require("../services/user.service.js");
// const mongoose = require("mongoose");

// const soma = (req, res) => {
//     const soma = 2 + 8;

//     res.send({soma: soma})
// };

// const soma2 = (req, res) => {
//     const soma = 50 + 50;

//     res.send({soma: soma})
// };

const create = async (req, res) => {
    try {
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
    } catch (err) {
        res.status(500).send({message: err.message})
    }
}

const findAll = async (req, res) => {
    try {
        const users = await userService.findAll();

        if (users.lenght === 0) {
            return res.status(400).send({ message: "Não há usuários cadastrados"})
        }

        res.send(users);
    } catch (err) {
        res.status(500).send({message: err.message})
    }
}

const findById = async (req, res) => {
    try {
        const user = req.user;

        res.send(user);
    } catch (err) {
        res.status(500).send({message: err.message})
    }
}

const update = async (req, res) => {
    try {
        const{name, username, email, password, avatar, background} = req.body;
    
        if (!name && !username && !email && !password && !avatar && !background){
            res.status(400).send({
                message: "Preencha pelo menos um campo para atualizar"});
            }
            
        const {id, user} = req;

        await userService.update(
            id,
            name,
            username, 
            email, 
            password, 
            avatar, 
            background
        );

        res.send({ message: "Usuário atualizado com sucesso"})
    } catch (err) {
        res.status(500).send({message: err.message})
    }
}

module.exports = {create, findAll, findById, update};