'use strict';

exports.index = function(req, res){
  res.render('home/sorry', {title: 'Sorry!'});
};

