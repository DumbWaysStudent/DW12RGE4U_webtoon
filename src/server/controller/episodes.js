const models = require('../models');

const Episodes = models.episode;

exports.index = (req, res) => {
  Episodes.findAll().then(result => res.send(result));
};

//tampil episode berdasarkan id_master
exports.show = (req, res) => {
  const id = req.params.id;
  Episodes.findAll({ where: { id_masters: id } }).then(result => res.send(result));
};
