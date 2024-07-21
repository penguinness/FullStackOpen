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

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
};
