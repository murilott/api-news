// const soma = (req, res) => {
//     const soma = 2 + 8;

//     res.send({soma: soma})
// };

// const soma2 = (req, res) => {
//     const soma = 50 + 50;

//     res.send({soma: soma})
// };

const create = (req, res) => {
    const{name, username, email, password, avatar, background} = req.body;

    if (!name || !username || !email || !password || !avatar || !background){
        res.status(400).send({
            message: "Preencha todos os campos para registro"});
    }

    res.status(201).send({
        message: "Usuário criado com sucesso",
        user: {
            name,
            username,
            email,
            avatar,
            background
        }
    });
}

module.exports = {create};