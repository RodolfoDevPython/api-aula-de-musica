'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('rankings', { 
      id: {
        type: Sequelize.INTEGER ,
        primaryKey: true ,
        autoIncrement: true ,
        allowNull: false
      },
      aluno_id: {
        type: Sequelize.INTEGER ,
        references: {
          model: "alunos", key: "id"
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        allowNull: false
      },
      tot_pontuacao: {
        type: Sequelize.INTEGER,
        allowNull: false
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
    return queryInterface.dropTable('rankings');
  }
};
