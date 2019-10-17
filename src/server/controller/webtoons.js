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
