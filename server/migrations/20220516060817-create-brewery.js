'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('brewery', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      brewery_name: {
        type: Sequelize.STRING
      },
      brewery_image: {
        type: Sequelize.STRING
      },
      brewery_description: {
        type: Sequelize.STRING
      },
      brewery_address: {
        type: Sequelize.STRING
      },
      business_hour: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('brewery');
  }
};