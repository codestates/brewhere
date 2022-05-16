'use strict';
const createdAt = new Date();
const updatedAt = new Date();

module.exports = {
  async up (queryInterface, Sequelize) {
  await queryInterface.bulkInsert(
    'brewery', 
      [
        {
          brewery_name: '서울브루어리 한남', 
          brewery_image: 'https://img1.kakaocdn.net/cthumb/local/R1920x0/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flocalfiy%2Fsearchregister_1540711267', 
          brewery_description: '서울에는 많은 즐거움이 있습니다. 아름다운 자연과 독특한 가게들, 맛있는 음식, 손에 닿는 편리함. 저희는 그 즐거움에 한 가지를 보태려고 합니다. 서울 사람들이, 서울 감성으로, 서울에서 양조한 맥주. 서울 브루어리입니다.',
          brewery_address: '서울 용산구 한남대로18길 18 2,3층 (우)04419',
          business_hour: '17:00 - 24:00, 매주 월 화 정기휴무',
          createdAt,
          updatedAt,
        }
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('brewery', null, {});
  }
};
