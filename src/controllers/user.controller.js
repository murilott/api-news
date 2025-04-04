const soma = (req, res) => {
    const soma = 2 + 8;

    res.send({soma: soma})
};

const soma2 = (req, res) => {
    const soma = 50 + 50;

    res.send({soma: soma})
};

module.exports = {soma, soma2};