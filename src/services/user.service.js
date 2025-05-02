const User = require("../models/User.js")

const create = (body) => User.create(body)

const findAll = () => User.find();

const findById = (id) => User.findById(id);

module.exports = {
    create,
    findAll,
    findById
};

// module.exports = create;
// export default create;