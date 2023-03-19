const express = require("express");
const path = require('path');
const app = express();

app.use(express.urlencoded({ extended: true }))

const formulario = require('./database/models/formulario');

app.use(express.static(path.join(__dirname, '../frontend/public')));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/pages/main-page/index.html'));
});

app.get("/secondary-page", (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/pages/secondary-page/index.html'));
});

app.post("/formulario", (req, res) => {

    const mensagemData = {
        nome: req.body.nome,
        email: req.body.email,
        assunto: req.body.assunto,
        mensagem: req.body.mensagem
    }

    formulario.create(mensagemData).then(function () {
        res.redirect("/secondary-page");
    }).catch(function (erro) {
        res.send("Houve um erro: " + erro)
    })
});

app.listen(3000, () => {
    console.log("Application started and Listening on port 3000");
});