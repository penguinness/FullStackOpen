import { useState } from 'react';

const BlogForm = ({ createBlog }) => {
  const [newTitle, setNewTitle] = useState('');
  const [newAuthor, setNewAuthor] = useState('');
  const [newUrl, setNewUrl] = useState('');

  const addBlog = async (event) => {
    event.preventDefault();
    const newBlog = await createBlog({
      title: newTitle,
      author: newAuthor,
      url: newUrl,
    });

    console.log('newTitle is', newTitle);
    console.log('newAuthor is', newAuthor);
    console.log('newBlog is', newBlog);

    setNewTitle('');
    setNewAuthor('');
    setNewUrl('');
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
