const mongoose = require('mongoose');

const BlogPostSchema = new mongoose.Schema({
  title: String,
  content: String,
  tags: [String],
  author: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('BlogPost', BlogPostSchema);