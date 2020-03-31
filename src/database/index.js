const Sequelize = require("sequelize");
const config = require("../config/database");

const Aluno = require("../app/models/Aluno");
const Modulos = require("../app/models/Modulos");
const Exercicios = require("../app/models/Exercicio"); 
const Respostas = require("../app/models/Resposta");

const connection = new Sequelize(config);

Aluno.init(connection);
Modulos.init(connection);
Exercicios.init(connection);
Respostas.init(connection);

Aluno.associate(connection.models);
Modulos.associate(connection.models);
Exercicios.associate(connection.models);
Respostas.associate(connection.models);

module.exports = connection;