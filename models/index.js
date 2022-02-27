const User = require('./User');
const BlogPost = require('./BlogPost');

BlogPost.hasMany(BlogPost, {
foreignKey: 'posts_id',
})

module.exports = { User, BlogPost};
