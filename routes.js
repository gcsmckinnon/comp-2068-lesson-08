module.exports = router => {
  require('./routes/genres')(router);
  require('./routes/movies')(router);
  require('./routes/users')(router);
  require('./routes/sessions')(router);

  return router;
};