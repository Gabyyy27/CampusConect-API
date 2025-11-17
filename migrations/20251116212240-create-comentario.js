'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Comentarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      texto: {
        type: Sequelize.TEXT
      },
      publicacionId: {
        type: Sequelize.INTEGER,
        references: {
      model: 'Publicacions',
      key: 'id'
      },
      onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
      },
      usuarioId: {
        type: Sequelize.INTEGER,
        references: {
      model: 'Usuarios',
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Comentarios');
  }
};