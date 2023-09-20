'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('historicos', { 
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
        type: Sequelize.STRING,
      },
      resposta_certa: {
        type: Sequelize.STRING,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('historicos');
  }
};
