const router = require('express').Router();
const { BlogPost } = require('../models');
// Import the custom middleware
const withAuth = require('../utils/auth');

// GET all blog posts for homepage
router.get('/', async (req, res) => {
  try {
    const dbBlogData = await BlogPost.findAll({
      include: [
        {
          model: BlogPost,
          attributes: ['title', 'author','content'],
        },
      ],
    });
    console.log(dbBlogData)
    const blogPosts = dbBlogData.map((blogPost) =>
        
     blogPost.get({ plain: true })
      );
    console.log(blogPosts);
    res.render('homepage', {
      blogPosts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
  
});

//add a blog post.
router.post('/', async (req, res) => {
  try {
    const dbBlogData = await BlogPost.create({
      title: req.body.title,
      author: req.body.author,
      content: req.body.content
    });
    res.status(200).json(dbBlogData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/dashboard', (req, res) => {
  if (req.session.loggedIn) {
    try{
    const dbBlogData = BlogPost.findAll({where:{author:req.session.userId}})
    console.log(dbBlogData)
    res.render('dashboard',dbBlogData);
    return;
    
  } catch (err){
    res.status(400).json(err);
  }
  }
  
  res.redirect('/');
});

module.exports = router;
