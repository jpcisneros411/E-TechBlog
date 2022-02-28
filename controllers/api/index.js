const router = require('express').Router();

const userRoutes = require('./user-routes');
const BlogPost = require('./blogPost-routes');

router.use('/users', userRoutes);
router.use('/BlogPost', BlogPost);

module.exports = router;
