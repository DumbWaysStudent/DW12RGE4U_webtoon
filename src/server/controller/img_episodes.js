const models = require('../models');

const ImgEpisodes = models.img_episode;
const Episodes = models.episode;

exports.ImgEpsShow = (req, res) => {
  Episodes.findOne({ where: { id_masters: req.params.id } }).then(episode => {
    ImgEpisodes.findAll({
      where: { id_episodes: episode.id },
      attributes: ['id', 'page', 'image'],
      include: [{
        model: Episodes,
        as: 'idEpisode',
        attributes: ['id', 'title']
      }]
    }).then(result => res.send(result));
  });
};
