const sequelize = require('../config/connection');
const seedBlogPost = require('./blogData')

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedBlogPost();

  process.exit(0);
};

seedAll();
