'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('masters', [
      {
        title: 'True Beauty',
        genre: 'Drama',
        isFavorite: 0,
        Image: 'https://swebtoon-phinf.pstatic.net/20180517_37/1526523687139iRpgs_JPEG/thumb_M.jpg',
        created_by: 1
      },
      {
        title: 'Age Matters',
        genre: 'Romance',
        isFavorite: 0,
        Image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1525115991l/40004581._SX318_.jpg',
        created_by: 1
      },
      {
        title: 'A Good Day to be a Dog',
        genre: 'Drama',
        isFavorite: 1,
        Image: 'https://swebtoon-phinf.pstatic.net/20180904_277/1536059595536c1T81_JPEG/thumb_ipad.jpg',
        created_by: 1
      },
    ], {});
  },
  //https://swebtoon-phinf.pstatic.net/20180904_277/1536059595536c1T81_JPEG/thumb_ipad.jpg
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('masters', null, {});
  }
};
