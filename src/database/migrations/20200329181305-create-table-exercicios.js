'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('exercicios', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      descricao: {
        type: Sequelize.STRING,
        allowNull: false
      },
      cargo_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'respostas', key: 'id'
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      created_at : {
        type : Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('exercicios');
  }
};
