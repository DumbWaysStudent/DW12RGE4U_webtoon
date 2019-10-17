const models = require('../models');

const ImgEpisodes = models.img_episode;

// Show Page episode berdasarkan episode
// exports.ImgEpsShow2 = (req, res) => {
//   Episodes.findOne({ where: { masters_id: req.params.id } }).then(episode => {
//     ImgEpisodes.findAll({
//       where: { episodes_id: episode.id },
//       attributes: ['id', 'page', 'image'],
//       include: [{
//         model: Episodes,
//         as: 'Episode',
//         attributes: ['id', 'title']
//       }]
//     }).then(result => res.send(result));
//   });
// };

// show image berdasarkan id webtoon dan id episode
exports.ShowImgEps = (req, res) => {
  ImgEpisodes.findAll({
    where: { masters_id: req.params.idM, episodes_id: req.params.idE },
    attributes: ['id', 'page', 'image']
  }).then(result => res.send(result));
};

// show image berdasarkan id webtoon dan id episode
exports.ShowCreationImgEps = (req, res) => {
  ImgEpisodes.findAll({
    where: { created_by: req.params.idU, masters_id: req.params.idM, episodes_id: req.params.idE },
    attributes: ['id', 'page', 'image', 'created_by', 'masters_id', 'episodes_id']
  }).then(result => res.send(result));
};

