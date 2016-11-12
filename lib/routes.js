import {Profiles} from '../imports/api/profiles.js'
import {Comment} from '../imports/api/profiles.js'

Router.route('/p/:_id', function () {
  var params = this.params; // { _id: "5" }
  var id = params._id; // "5"
  this.render("profile", {
    data: function() { return Profiles.findOne({userId: this.id });}
  });
}, {
    name: 'profile'
});

Router.route('/new', function () {
  this.render("new");
});

Router.route('/', function() {
  this.render("home");
});

Router.route('/Comment', function() {
  this.render("Comment");
});

Router.route('/p/:_iid', function () {
  var params = this.parrams; // { _id: "5" }
  var id = params._iid; // "5"
  this.render("comment", {
    data: function() { return Comment.findOne({userId: this.id });}
  });
}, {
    name: 'comment'
});
