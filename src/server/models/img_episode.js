'use strict';
module.exports = (sequelize, DataTypes) => {
  const img_episode = sequelize.define('img_episode', {
    page: DataTypes.INTEGER,
    image: DataTypes.STRING,
    id_episodes: DataTypes.INTEGER
  }, {});
  img_episode.associate = function(models) {
    // associations can be defined here\
    img_episode.belongsTo(models.episode, {
      as: 'idEpisode',
      foreignKey: 'id_episodes'
    });
  };
  return img_episode;
};
