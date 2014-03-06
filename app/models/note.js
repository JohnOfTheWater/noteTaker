'use strict';

module.exports = Note;

var notes = global.nss.db.collection('notes');
var Mongo = require('mongodb');
var _ = require('lodash');

function Note(data, user){
  this.title = data.title;
  this.body = data.body;
  this.dateCreated = data.dateCreated ? new Date(data.dateCreated) : new Date();
  this.tags = data.tags.split(',').map(function(tag){return tag.trim();});
  this.tags = _.compact(this.tags);
  this.userId = new Mongo.ObjectID(user);
}

Note.prototype.insert = function(fn){
  notes.insert(this, function(){
    fn();
  });
};
/*
Note.prototype.insert = function(fn){
  notes.insert(this, function(err, record){
    fn(record[0]);
  });
};
*/
Note.findByUserId = function(id, fn){
  var userId = new Mongo.ObjectID(id);
  notes.find({userId:userId}).toArray(function(err, records){
    fn(records);
  });
};
