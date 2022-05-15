'use strict';
const createdAt = new Date();
const updatedAt = new Date();

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          user_name: 'kimcoding',
          user_email: 'kimcoding@coding.com',
          password: '1234',
          createdAt,
          updatedAt,
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('User', null, {});
  }
};
