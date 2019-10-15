'use strict';
module.exports = (sequelize, DataTypes) => {
  const episode = sequelize.define('episode', {
    title: DataTypes.STRING,
    image: DataTypes.STRING
  }, {});
  episode.associate = function(models) {
    // associations can be defined here
  };
  return episode;
};
