const _ = require('lodash');

const dummy = (blogs) => {
  return 1;
};

const totalLikes = (blogs) => {
  return blogs.reduce((sum, blog) => sum + blog.likes, 0);
};

const favoriteBlog = (blogs) => {
  const mostLikedBlog = blogs.reduce((mostLikedBlog, currentBlog) => {
    return currentBlog.likes > mostLikedBlog.likes
      ? currentBlog
      : mostLikedBlog;
  }, blogs[0]);
  return {
    title: mostLikedBlog.title,
    author: mostLikedBlog.author,
    likes: mostLikedBlog.likes,
  };
};

const mostBlogs = (blogs) => {
  return _.chain(blogs)
    .groupBy('author')
    .map((groupedBlogs, author) => ({
      author: author,
      blogs: groupedBlogs.length,
    }))
    .maxBy('blogs')
    .value();
};

const mostLikes = (blogs) => {
  return _.chain(blogs)
    .groupBy('author')
    .map((groupedBlogs, author) => ({
      author: author,
      likes: _.sumBy(groupedBlogs, 'likes'),
    }))
    .maxBy('likes')
    .value();
};

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes,
};
