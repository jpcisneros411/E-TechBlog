const User = require('./User');
const Gallery = require('./Gallery');
const Painting = require('./Painting');
const BlogPost = require('./BlogPost');

Gallery.hasMany(Painting, {
  foreignKey: 'gallery_id',
});

BlogPost.hasMany(BlogPost, {
//foreignKey: 'posts_id',
})

Painting.belongsTo(Gallery, {
  foreignKey: 'gallery_id',
});

module.exports = { User, Gallery, Painting };
