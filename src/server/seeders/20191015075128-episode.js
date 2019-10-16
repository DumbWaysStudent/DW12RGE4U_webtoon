'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('episodes', [
      {
        title: 'Ep. 1',
        image: 'https://swebtoon-phinf.pstatic.net/20180815_168/1534306363709DyFxg_JPEG/11_EC8DB8EB84A4EC9DBC_mobile.jpg',
        id_masters: 1
      },
      {
        title: 'Ep. 2',
        image: 'https://vignette.wikia.nocookie.net/webtoon/images/9/91/True_Beauty.jpg/revision/latest?cb=20181031181903',
        id_masters: 2
      },
      {
        title: 'Ep. 3',
        image: 'https://i.pinimg.com/originals/33/1b/fd/331bfd9747e187b72c0e945fa29c3b17.jpg',
        id_masters: 1
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('episodes', null, {});
  }
};
