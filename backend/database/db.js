require('dotenv').config();
const Sequelize = require('sequelize')

const database = process.env.DATABASE
const user = process.env.USER
const password = process.env.PASSWORD

const db = new Sequelize(database, user, password, {
    host: "localhost",
    dialect: "mysql"
})

db.authenticate().then(function(){
    console.log('Conexão realizada com sucesso');
}).catch(function(err){
    console.log('Erro ao realizar a conexão com banco de dados: ' + err);
})

module.exports = db