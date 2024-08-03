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
    user: {
      username: 'randomuser',
      name: 'Random User',
      id: 'rand0m1d',
    },
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

test('URL and number of likes are shown when view button has been clicked', async () => {
  const blog = {
    title: 'Random Blog',
    author: 'Rando',
    url: 'http://randomblog.com',
    likes: 7,
    user: {
      username: 'randomuser',
      name: 'Random User',
      id: 'rand0m1d',
    },
  };

  render(<Blog blog={blog} updateBlog={() => {}} removeBlog={() => {}} />);

  const urlElementBeforeClick = screen.queryByText(blog.url);
  const likesElementBeforeClick = screen.queryByText(`${blog.likes} likes`);

  expect(urlElementBeforeClick).toBeNull();
  expect(likesElementBeforeClick).toBeNull();

  const user = userEvent.setup();
  const button = screen.getByText('view');
  await user.click(button);

  const urlElementAfterClick = screen.getByText(blog.url);
  const likesElementAfterClick = screen.getByText(`${blog.likes} likes`);

  expect(urlElementAfterClick).toBeDefined();
  expect(likesElementAfterClick).toBeDefined();
});

test('if like button is clicked twice, handleLike is called twice', async () => {
  const blog = {
    title: 'Random Blog',
    author: 'Rando',
    url: 'http://randomblog.com',
    likes: 7,
    user: {
      username: 'randomuser',
      name: 'Random User',
      id: 'rand0m1d',
    },
  };

  const updateBlog = vi.fn();

  render(<Blog blog={blog} updateBlog={updateBlog} removeBlog={() => {}} />);

  const user = userEvent.setup();
  const viewButton = screen.getByText('view');
  await user.click(viewButton);

  const likeButton = screen.getByText('like');
  await user.click(likeButton);
  await user.click(likeButton);

  expect(updateBlog.mock.calls).toHaveLength(2);
});
