'use strict';

var Note = require('../models/note');
var moment = require('moment');

exports.index = function(req, res){
  Note.findByUserId(req.session.userId, function(notes){
    res.render('notes/index', {title:'Notes Page', notes:notes, moment:moment});
  });
};

exports.create = function(req, res){
  console.log('inside routes: '+req.body);
  console.log('inside routes userId: '+req.session.userId);
  var note = new Note(req.body, req.session.userId);
  console.log('inside routes notes: '+req.body);
  note.insert(function(){
    res.redirect('/');
  });
};

