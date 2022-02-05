'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('finalities', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      finality_name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true 
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('finalities');
  }
};