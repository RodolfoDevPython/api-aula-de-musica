'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('respostas_erradas', { 
      id: {
        type: Sequelize.INTEGER ,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      aluno_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "alunos", key: "id"
        },
        allowNull: false
      },
      exercicio_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "exercicios", key: "id"
        },
        allowNull: false
      },
      resposta_errada: {
        type: Sequelize.INTEGER,
        allowNull: false
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('respostas_erradas');
  }
};
