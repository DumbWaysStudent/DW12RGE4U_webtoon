const express = require('express');
const bodyParser = require('body-parser');
require('express-group-routes');

const app = express();
const port = 5000;
app.use(bodyParser.json());

// Controller
const WebtoonController = require('./controller/webtoons');
const UserController = require('./controller/users');
const EpisodeController = require('./controller/episodes');
const AuthController = require('./controller/auth');

app.group('/api/v1', (router) => {
  // Api Webtoon
  router.get('/webtoons', WebtoonController.index); 
  // router.get('/webtoon/:id', WebtoonController.show)    
  // router.post('/webtoon', WebtoonController.store)    
  // router.patch('/webtoon/:id', WebtoonController.update)    
  // router.delete('/webtoon/:id', WebtoonController.delete)

  // Api Users
  router.get('/users', UserController.index);

  // Api Episodes
  router.get('/episodes/:id', EpisodeController.show);

  // Api Auth
  router.post('/auth', AuthController.login);

  // Api Register User
  router.post('/register', AuthController.register);
});

app.listen(port, () => console.log(`Server start on port ${port}!`));
