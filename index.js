import express from 'express'
import userRoute from "./src/routes/user.route.js"
import connectDatabase from "./src/database/db.js"
// const connectDatabase = require("./src/database/db.js");

const app = express();

const port = 3000;

connectDatabase();
app.use(express.json());
app.use("/user", userRoute);
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));


// Método HTTP - CRUD
    // GET - pega uma info
    // POST - cria uma info
    // PUT - altera toda a info
    // PATH - altera parte da info
    // DELETE - apaga uma info
// Nome - um identificador da rota
// Função (Callback) - responsável por executar algum comando

// app.get('/soma', (req, res) => {
//     const soma = 2 + 2;

//     res.send({soma: soma})
// })

// app.get('/home', (req, res) => {
//   res.send('Bem vindo')
// })