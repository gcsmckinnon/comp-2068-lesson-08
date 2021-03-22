const {
  index, create
} = require('../controllers/genres');

module.exports = router => {
  router.get('/genres', index);
  router.post('/genres', create);
};