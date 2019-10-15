const models = require('../models');

const episodes = models.episode;

exports.index = (req, res) => {
  episodes.findAll().then(result => res.send(result));
};

exports.show = (req, res) => {
  episodes.findOne({ where: { id: req.params.id } }).then(result => res.send(result));
};
