'use strict';
const createdAt = new Date();
const updatedAt = new Date();

module.exports = {
  async up (queryInterface, Sequelize) {
  await queryInterface.bulkInsert(
    'menu', 
      [
        {
          menu_name: '골드러쉬 캘리포니아 커먼, 샐린저 호밀 IPA, 페일 블루 닷 IPA, 로버스트 포터',
          menu_image: 'https://img1.kakaocdn.net/cthumb/local/R1920x0/?fname=http%3A%2F%2Ft1.kakaocdn.net%2Fmystore%2F1412724EC2F145D9A01AA08A0EAF1187',
          menu_price: '8,500, 8,500, 9,000, 9,500',
          b_id: '3',
          createdAt,
          updatedAt,
        }
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('menu', null, {});
  }
};
