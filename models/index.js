const User = require('./User');
const Gallery = require('./Gallery');
const Painting = require('./Painting');

Gallery.hasMany(Painting, {
  foreignKey: 'gallery_id',
});

//Blog.hasMany(Posts, {
//foreignKey: 'posts_id',
//})

Painting.belongsTo(Gallery, {
  foreignKey: 'gallery_id',
});

module.exports = { User, Gallery, Painting };
