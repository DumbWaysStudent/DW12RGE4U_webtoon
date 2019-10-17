const models = require('../models');
const Sequelize = require('sequelize');

const Op = Sequelize.Op;
const masters = models.master;

exports.index = (req, res) => {
  masters.findAll().then(result => res.send(result));
};

exports.ShowSearchWebtoon = (req, res) => {
  const cari = req.query.title;
  console.log(cari);
  masters.findAll({
    where: { title: { [Op.like]: `%${cari}%` } }
  }).then(result => res.send(result)); 
};

exports.ShowWebtoonCreation = (req, res) => {
  const id = req.params.id;
  masters.findAll({
    where: { created_by: id }
  }).then(result => res.send(result));
};
