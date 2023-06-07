const express = require('express');
const loginRota = require('./rotas/login_rotas')
const produtoRota = require('./rotas/produto_rotas')

const app = express();
const PORTA = 3000;

app.use(express.json());

app.use('/login', loginRota);
app.use('/produtos', produtoRota);

app.listen(PORTA, () => {
    console.log("Servidor iniciado com sucesso...")
})