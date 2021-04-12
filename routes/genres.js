const {
  index, show, create, update, destroy
} = require('../controllers/genres');
const passport = require('passport');

module.exports = router => {
  router.get('/genres', index);
  router.get('/genres/:id', show);
  router.post('/genres', passport.authenticate('jwt', { session: false }), create);
  router.put('/genres', passport.authenticate('jwt', { session: false }), update);
  router.delete('/genres', passport.authenticate('jwt', { session: false }), destroy);
};