'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('respostas', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoincrement: true,
        allowNull: false
      },
      descricao : {
        type: Sequelize.STRING,
        allowNull: false,
      },
      pontuacao: {
        type: Sequelize.INTEGER,
        allowNull: false,
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('respostas');
  }
};
