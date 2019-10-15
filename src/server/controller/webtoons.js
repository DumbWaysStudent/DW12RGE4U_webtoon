const models = require('../models');

const masters = models.master;

exports.index = (req, res) => {
  masters.findAll().then(result => res.send(result));
};
