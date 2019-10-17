'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('img_episodes', [
      {
        page: 1,
        image: 'https://swebtoon-phinf.pstatic.net/20180815_168/1534306363709DyFxg_JPEG/11_EC8DB8EB84A4EC9DBC_mobile.jpg',
        created_by: 1,
        masters_id: 1,
        episodes_id: 1
      },
      {
        page: 1,
        image: 'https://vignette.wikia.nocookie.net/webtoon/images/9/91/True_Beauty.jpg/revision/latest?cb=20181031181903',
        created_by: 2,
        masters_id: 1,
        episodes_id: 1
      },
      {
        page: 2,
        image: 'https://swebtoon-phinf.pstatic.net/20180815_168/1534306363709DyFxg_JPEG/11_EC8DB8EB84A4EC9DBC_mobile.jpg',
        created_by: 1,
        masters_id: 1,
        episodes_id: 2
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('img_episodes', null, {});
  }
};
