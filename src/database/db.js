const mongoose = require("mongoose");

const connectDatabase = () => {
    console.log("Conectando ao banco de dados...");

    mongoose.connect("mongodb+srv://root:univille@cluster0.xi5zx7r.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
        // , {useNewUrlParser: true, useUnifiedTopology: true}
    )
    .then(() => console.log("MongoDB Atlas conectado"))
    .catch((error) => console.log(error))
};

module.exports = connectDatabase;