const models = require('../models');

const Episodes = models.episode;

exports.index = (req, res) => {
  Episodes.findAll().then(result => res.send(result));
};

//tampil episode berdasarkan id_master
exports.show = (req, res) => {
  const id = req.params.id;
  Episodes.findAll({ where: { masters_id: id } }).then(result => res.send(result));
};

exports.CreateMyEpisode = (req, res) => {
  const { title, image } = req.body;
  Episodes.create({ 
      title,
      image,
      masters_id: req.params.idWb,
      created_by: req.params.idUser
    }).then(result => {
      res.send({
        message: 'Add Episode Succesfully',
        result
      });
    });
};

exports.UpdateMyEpisode = (req, res) => {
  Episodes.update(
    req.body,
    { where: { created_by: req.params.idU, masters_id: req.params.idM, id: req.params.id } }
  ).then(res.send(req.body));
};
