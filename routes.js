module.exports = router => {
  require('./routes/genres')(router);
  require('./routes/movies')(router);

  return router;
};