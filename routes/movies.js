const { index, show, create, update, destroy } = require('../controllers/movies');
const passport = require('passport');

module.exports = router => {
  router.get("/movies", index);
  router.get("/movies/:id", show);
  router.post("/movies", passport.authenticate('jwt', { session: false }), create);
  router.put("/movies", passport.authenticate('jwt', { session: false }), update);
  router.delete("/movies", passport.authenticate('jwt', { session: false }), destroy);

  return router;
};