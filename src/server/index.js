const express = require('express');
const bodyParser = require('body-parser');
require('express-group-routes');

const app = express();
const port = 5000;
const { authenticated } = require('./middleware');


// Controller
const WebtoonController = require('./controller/webtoons');
const UserController = require('./controller/users');
const EpisodeController = require('./controller/episodes');
const AuthController = require('./controller/auth');
const ImgEpisodeController = require('./controller/img_episodes');
const ShowFavoriteController = require('./controller/favorites');

app.use(bodyParser.json());

app.group('/api/v1', (router) => {
  // Api Users
  router.get('/users', UserController.index);

  // Api Episodes berdasarkan id
  router.get('/webtoons/:id/episode', EpisodeController.show);
  
  // Api Auth
  router.post('/auth', AuthController.login);

  // Api Register User
  router.post('/register', AuthController.register);

  // Api Image Episode Berdasarkan episode 1 atau 2 dst
  router.get('/webtoon/:id/episode/:id', ImgEpisodeController.ImgEpsShow);

  // Api Webtoon isFavorite pemanggilan /favorite/?isFavorite=true
  router.get('/favorite', authenticated, ShowFavoriteController.ShowWebtonFavorite);

  router.get('/webtoon', WebtoonController.ShowSearchWebtoon); // /webtoons?title=blala

  router.get('/user/:id/webtoon', authenticated, WebtoonController.ShowWebtoonCreation);

  router.post('/user/:id/webtoon', authenticated, WebtoonController.StoreMyCreation);

  router.get('/user/:idUser/webtoon/:idWebtoon', authenticated, WebtoonController.ShowMyCreation);

  router.patch('/user/:idUser/webtoon/:id', authenticated, WebtoonController.UpdateMyCreation);

  router.delete('/user/:idUser/webtoon/:id', authenticated, WebtoonController.DeleteMyCreation);
});

app.listen(port, () => console.log(`Server running on port ${port}!`));
