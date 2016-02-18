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
