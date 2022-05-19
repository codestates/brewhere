'use strict';
const createdAt = new Date();
const updatedAt = new Date();

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'user',
      [
        {
          username: 'kimcoding',
          useremail: 'kimcoding@coding.com',
          password: 'a12341234',
          createdAt,
          updatedAt,
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('user', null, {});
  }
};
