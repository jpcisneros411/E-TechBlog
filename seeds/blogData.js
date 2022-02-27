const { BlogPost } = require('../models');

const blogData = [
    {
    title: "Working on a Truck.",
    author: "Alex",
    content: "Man, I really like my truck. It goes fast, vrooooom."
    },
    {    
    title: "I Like Computers!",
    author: "Bobby",
    content:" I like computers they are nice."
    },
    {
    title: "Ps5 better than PC?",
    author: "Charlie",
    content: "SSD so fast :O"
    }
];

const seedBlogPost = () => BlogPost.bulkCreate(blogData);

module.exports = seedBlogPost;