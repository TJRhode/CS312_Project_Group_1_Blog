const express = require('express');
const BlogPost = require('../models/BlogPost');
const router = express.Router();

router.post('/', async (req, res) => {
  const blogPost = new BlogPost(req.body);
  await blogPost.save();
  res.send(blogPost);
});

router.get('/', async (req, res) => {
  const blogPosts = await BlogPost.find();
  res.send(blogPosts);
});

router.put('/:id', async (req, res) => {
  const blogPost = await BlogPost.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(blogPost);
});

router.delete('/:id', async (req, res) => {
  await BlogPost.findByIdAndDelete(req.params.id);
  res.send({ message: 'Blog post deleted' });
});

module.exports = router;