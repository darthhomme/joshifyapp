var mongoose = require('mongoose');

var noticeSchema = mongoose.Schema({
  username: { type: String, required: true },
  notice_type: { type: String, required: true },
  quality: {type: Number },
  review: { type: String },
  img_url: {type: String},
}, {timestamps: true });

var Notice = mongoose.model('Notice', noticeSchema);
module.exports = Notice;

// var mongoose = require('mongoose');
// var bcrypt = require('bcryptjs');
// var crypto = require('crypto');
//
// var TodoSchema = mongoose.Schema({
//   task: {type: String}
// });
//
//
// var UserSchema = mongoose.Schema({
//   username: {type: String},
//   password: {type: String},
//   token: {type: String},
//   todos: [TodoSchema]
// });
//
//
// UserSchema.pre('save', function(next){
//   if (this.isModified('password')) {
//     this.password = bcrypt.hashSync(this.password, 10);
//   }
//   return next();
// });
//
//
// UserSchema.methods.setToken = function(err, done){
//   var scope = this;
//   crypto.randomBytes(256, function(err, buf) {
//     if (err) return done(err)
//     scope.token = buf;
//     scope.save(function(err){
//       if (err) return done(err);
//       done();
//     });
//   });
// };
//
//
// UserSchema.methods.authenticate = function(passwordTry, callback) {
//   bcrypt.compare(passwordTry, this.password, function(err, isMatch) {
//     if (err) return callback(err);
//     callback(null, isMatch);
//   });
// };
//
// module.exports = mongoose.model('User', UserSchema);
