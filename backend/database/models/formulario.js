const sequelize = require('sequelize');
const db = require('../db');

const formulariodb = db.define('formulario' , {
    id: {
        type:sequelize.INTEGER,
        autoIncrement: true,
        allowNULL: false,
        primaryKey: true
    },
    nome: {
        type:sequelize.STRING,
        allowNULL: false,
        required: true,
        validate: {
			notEmpty: true
		}
    },
    email: {
        type:sequelize.STRING,
        allowNULL: false,
        required: true,
        validate: {
            isEmail: true, 
			notEmpty: true
		}
    },
    assunto: {
        type:sequelize.STRING,
        allowNULL: false,
        required: true,
        validate: {
			notEmpty: true
		}
    },
    mensagem: {
        type:sequelize.TEXT,
        allowNULL: false,
        required: true,
        validate: {
			notEmpty: true
		}
    },
    createdAt: {
        type: 'TIMESTAMP',
        defaultVaue: sequelize.literal('CURRENT_TIMESTAMP'),
        allowNULL: false
    },
    updatedAt: {
        type: 'TIMESTAMP',
        defaultVaue: sequelize.literal('CURRENT_TIMESTAMP'),
        allowNULL: false
    }

})

//formulariodb.sync({force: true});
module.exports = formulariodb