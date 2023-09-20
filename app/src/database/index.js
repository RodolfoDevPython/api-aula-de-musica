const Sequelize = require("sequelize");
const config = require("../config/database");

const Aluno = require("../app/models/Aluno");
const Modulos = require("../app/models/Modulos");
const Exercicios = require("../app/models/Exercicio"); 
const Respostas = require("../app/models/Resposta");
const Ranking = require("../app/models/Ranking");
const Alternativas = require("../app/models/Alternativa");
const Historico = require("../app/models/historico_resposta");

const connection = new Sequelize(config);

Aluno.init(connection);
Modulos.init(connection);
Exercicios.init(connection);
Respostas.init(connection);
Ranking.init(connection);
Alternativas.init(connection);
Historico.init(connection);

Aluno.associate(connection.models);
Modulos.associate(connection.models);
Exercicios.associate(connection.models);
Respostas.associate(connection.models);
Ranking.associate(connection.models);
Historico.associate(connection.models);

module.exports = connection;