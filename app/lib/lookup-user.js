'use strict';

module.exports = function(req, res, next){
  var User = require('../models/user');

  User.findById(req.session.userId, function(user){
    console.log('lookup-user '+req.session.userId);
    res.locals.user = user;
    next();
  });
};
