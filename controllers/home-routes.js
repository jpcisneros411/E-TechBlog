const router = require('express').Router();
const { Gallery, Painting, BlogPost } = require('../models');
// Import the custom middleware
const withAuth = require('../utils/auth');

// GET all blog posts for homepage
router.get('/', async (req, res) => {
  try {
    const dbBlogData = await BlogPost.findAll({
      include: [
        {
          model: post,
          attributes: ['title', 'author','contents'],
        },
      ],
    });

    const blogPosts = dbBlogData.map((blogPost) =>
      blogPost.get({ plain: true })
    );

    res.render('homepage', {
      blogPosts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});



// GET one painting
// Use the custom middleware before allowing the user to access the painting
// router.get('/painting/:id', withAuth, async (req, res) => {
//   try {
//     const dbPaintingData = await Painting.findByPk(req.params.id);

//     const painting = dbPaintingData.get({ plain: true });

//     res.render('painting', { painting, loggedIn: req.session.loggedIn });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// router.get('/login', (req, res) => {
//   if (req.session.loggedIn) {
//     res.redirect('/');
//     return;
//   }

//   res.render('login');
// });

module.exports = router;
