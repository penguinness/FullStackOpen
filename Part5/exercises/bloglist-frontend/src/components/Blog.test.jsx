import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Blog from './Blog';
import BlogForm from './BlogForm';

test('renders blog title and author, but not URL or number of likes by default', () => {
  const blog = {
    title: 'Random Blog',
    author: 'Rando',
    url: 'http://randomblog.com',
    likes: 7,
  };

  const { container } = render(
    <Blog blog={blog} updateBlog={() => {}} removeBlog={() => {}} />
  );

  const titleElement = container.querySelector('.blog-title');
  const authorElement = container.querySelector('.blog-author');

  expect(titleElement).toHaveTextContent(blog.title);
  expect(authorElement).toHaveTextContent(blog.author);

  const urlElement = container.querySelector('.blog-url');
  const likesElement = container.querySelector('.blog-likes');

  expect(urlElement).toBeNull();
  expect(likesElement).toBeNull();
});
