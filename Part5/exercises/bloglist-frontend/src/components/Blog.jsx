import { useState } from 'react';

const Blog = ({ blog, updateBlog, removeBlog }) => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5,
  };

  const handleLike = () => {
    const updatedBlog = { ...blog, likes: blog.likes + 1 };
    updateBlog(updatedBlog);
  };

  const handleRemove = () => {
    removeBlog(blog.id);
  };

  return (
    <div style={blogStyle}>
      <div>
        <span className='blog-title'>{blog.title}</span>
        <span className='blog-author'>{blog.author}</span>
        <br />
        <button onClick={toggleVisibility}>{visible ? 'hide' : 'view'}</button>
      </div>
      {visible && (
        <div>
          <span className='blog-url'>{blog.url}</span> <br />
          <span className='blog-likes'>{blog.likes} likes</span>{' '}
          <button onClick={handleLike}>like</button> <br />
          <span className='blog-user-name'>{blog.user.name}</span> <br />
          <button onClick={handleRemove}>remove</button>
        </div>
      )}
    </div>
  );
};

export default Blog;
