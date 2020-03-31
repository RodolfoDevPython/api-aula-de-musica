'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('alunos_modulos', { 
      id: { 
        type: Sequelize.INTEGER ,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },  
      modulo_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'modulos', key: 'id'
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      aluno_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'alunos', key: 'id'
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
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
    return queryInterface.dropTable('alunos_modulos');
  }
};
