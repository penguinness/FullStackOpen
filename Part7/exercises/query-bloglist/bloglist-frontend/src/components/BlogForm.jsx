import { useState } from 'react';

const BlogForm = ({ createBlog }) => {
  const [newTitle, setNewTitle] = useState('');
  const [newAuthor, setNewAuthor] = useState('');
  const [newUrl, setNewUrl] = useState('');

  const addBlog = (event) => {
    event.preventDefault();
    createBlog({ title: newTitle, author: newAuthor, url: newUrl });

    setNewTitle('');
    setNewAuthor('');
    setNewUrl('');

    window.location.reload();
  };

  return (
    <div>
      <h2>Create a new blog</h2>

      <form onSubmit={addBlog}>
        <div>
          title:{' '}
          <input
            value={newTitle}
            onChange={(event) => setNewTitle(event.target.value)}
            className='title-input'
            data-testid='title-input'
          />
        </div>
        <div>
          author:{' '}
          <input
            value={newAuthor}
            onChange={(event) => setNewAuthor(event.target.value)}
            className='author-input'
            data-testid='author-input'
          />
        </div>
        <div>
          url:{' '}
          <input
            value={newUrl}
            onChange={(event) => setNewUrl(event.target.value)}
            className='url-input'
            data-testid='url-input'
          />
        </div>
        <button type='submit'>create</button>
      </form>
    </div>
  );
};

export default BlogForm;
