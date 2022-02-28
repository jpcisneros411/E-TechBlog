const router = require('express').Router();
const BlogPost = require('../../models/BlogPost');

// route to create/add a Blog Post using async/await
router.post('/', async (req, res) => {
  try { 
    const blogData = await BlogPost.create({
    title: req.body.title,
    author: req.body.author,
    content: req.body.content
  });
  // if the Blog Post is successfully created, the new response will be returned as json
  res.status(200).json(blogData)
} catch (err) {
  res.status(400).json(err);
}
});


module.exports = router;
