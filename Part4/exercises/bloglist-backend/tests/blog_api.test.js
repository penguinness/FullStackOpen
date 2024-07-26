const { test, after, beforeEach, describe } = require('node:test');
const assert = require('node:assert');
const mongoose = require('mongoose');
const supertest = require('supertest');
const app = require('../app');
const api = supertest(app);
const bcrypt = require('bcrypt');

const helper = require('./test_helper');

const User = require('../models/user');
const Blog = require('../models/blog');

beforeEach(async () => {
  await User.deleteMany({});
  await Blog.deleteMany({});

  const passwordHash = await bcrypt.hash('sekret', 10);
  const user = new User({ username: 'root', passwordHash });

  await user.save();
  await Blog.insertMany(helper.initialBlogs);
});

test('blogs are returned as json', async () => {
  await api
    .get('/api/blogs')
    .expect(200)
    .expect('Content-Type', /application\/json/);
});

test('there are six blogs', async () => {
  const response = await api.get('/api/blogs');

  assert.strictEqual(response.body.length, 6);
});

test('the unique identifier property of blog posts is named id', async () => {
  const response = await api.get('/api/blogs');
  const blogs = response.body;

  blogs.forEach((blog) => {
    assert.notStrictEqual(blog.id, undefined);
    assert.strictEqual(blog._id, undefined);
  });
});

test('a valid blog can be added ', async () => {
  const newUser = {
    name: 'Random User',
    username: 'randomuser',
    password: 'randompassword',
  };

  await api
    .post('/api/users')
    .send(newUser)
    .expect(201)
    .expect('Content-Type', /application\/json/);

  const loginResponse = await api
    .post('/api/login')
    .send({ username: newUser.username, password: newUser.password })
    .expect(200)
    .expect('Content-Type', /application\/json/);

  const token = loginResponse.body.token;

  const newBlog = {
    title: 'Random Blog',
    author: 'Rando',
    url: 'https://randomblog.com',
    likes: 24,
  };

  await api
    .post('/api/blogs')
    .send(newBlog)
    .set('Authorization', `Bearer ${token}`)
    .expect(201)
    .expect('Content-Type', /application\/json/);

  const response = await api.get('/api/blogs');

  const titles = response.body.map((r) => r.title);

  assert.strictEqual(response.body.length, helper.initialBlogs.length + 1);

  assert(titles.includes('Random Blog'));
});

test('a blog missing likes is default to 0', async () => {
  const newUser = {
    name: 'Random User',
    username: 'randomuser',
    password: 'randompassword',
  };

  await api
    .post('/api/users')
    .send(newUser)
    .expect(201)
    .expect('Content-Type', /application\/json/);

  const loginResponse = await api
    .post('/api/login')
    .send({ username: newUser.username, password: newUser.password })
    .expect(200)
    .expect('Content-Type', /application\/json/);

  const token = loginResponse.body.token;

  const newBlog = {
    title: 'Random Blog',
    author: 'Rando',
    url: 'https://randomblog.com',
  };

  const response = await api
    .post('/api/blogs')
    .send(newBlog)
    .set('Authorization', `Bearer ${token}`)
    .expect(201)
    .expect('Content-Type', /application\/json/);

  assert.strictEqual(response.body.likes, 0);
});

test('blog without title is not added', async () => {
  const newUser = {
    name: 'Random User',
    username: 'randomuser',
    password: 'randompassword',
  };

  await api
    .post('/api/users')
    .send(newUser)
    .expect(201)
    .expect('Content-Type', /application\/json/);

  const loginResponse = await api
    .post('/api/login')
    .send({ username: newUser.username, password: newUser.password })
    .expect(200)
    .expect('Content-Type', /application\/json/);

  const token = loginResponse.body.token;

  const newBlog = {
    author: 'Rando',
    url: 'https://randomblog.com',
    likes: 0,
  };

  await api
    .post('/api/blogs')
    .send(newBlog)
    .set('Authorization', `Bearer ${token}`)
    .expect(400);

  const response = await api.get('/api/blogs');

  assert.strictEqual(response.body.length, helper.initialBlogs.length);
});

test('blog without url is not added', async () => {
  const newUser = {
    name: 'Random User',
    username: 'randomuser',
    password: 'randompassword',
  };

  await api
    .post('/api/users')
    .send(newUser)
    .expect(201)
    .expect('Content-Type', /application\/json/);

  const loginResponse = await api
    .post('/api/login')
    .send({ username: newUser.username, password: newUser.password })
    .expect(200)
    .expect('Content-Type', /application\/json/);

  const token = loginResponse.body.token;

  const newBlog = {
    title: 'Random Blog',
    author: 'Rando',
    likes: 0,
  };

  await api
    .post('/api/blogs')
    .send(newBlog)
    .set('Authorization', `Bearer ${token}`)
    .expect(400);

  const response = await api.get('/api/blogs');

  assert.strictEqual(response.body.length, helper.initialBlogs.length);
});

test('a blog with valid id and user can be deleted', async () => {
  const newUser = {
    name: 'Random User',
    username: 'randomuser',
    password: 'randompassword',
  };

  await api
    .post('/api/users')
    .send(newUser)
    .expect(201)
    .expect('Content-Type', /application\/json/);

  const loginResponse = await api
    .post('/api/login')
    .send({ username: newUser.username, password: newUser.password })
    .expect(200)
    .expect('Content-Type', /application\/json/);

  const token = loginResponse.body.token;

  const newBlog = {
    title: 'Random Blog',
    author: 'Rando',
    url: 'https://randomblog.com',
    likes: 24,
  };

  const blogResponse = await api
    .post('/api/blogs')
    .send(newBlog)
    .set('Authorization', `Bearer ${token}`)
    .expect(201)
    .expect('Content-Type', /application\/json/);

  const blogToDelete = blogResponse.body;

  const blogsAtStart = await helper.blogsInDb();

  await api
    .delete(`/api/blogs/${blogToDelete.id}`)
    .set('Authorization', `Bearer ${token}`)
    .expect(204);

  const blogsAtEnd = await helper.blogsInDb();

  assert.strictEqual(blogsAtEnd.length, blogsAtStart.length - 1);

  const titles = blogsAtEnd.map((r) => r.title);
  assert(!titles.includes(blogToDelete.title));
});

test('deletion fails if user is invalid', async () => {
  const newUser1 = {
    name: 'Random User 1',
    username: 'randomuser1',
    password: 'randompassword1',
  };

  await api
    .post('/api/users')
    .send(newUser1)
    .expect(201)
    .expect('Content-Type', /application\/json/);

  const loginResponse1 = await api
    .post('/api/login')
    .send({ username: newUser1.username, password: newUser1.password })
    .expect(200)
    .expect('Content-Type', /application\/json/);

  const token1 = loginResponse1.body.token;

  const newBlog = {
    title: 'Random Blog',
    author: 'Rando',
    url: 'https://randomblog.com',
    likes: 24,
  };

  const blogResponse = await api
    .post('/api/blogs')
    .send(newBlog)
    .set('Authorization', `Bearer ${token1}`)
    .expect(201)
    .expect('Content-Type', /application\/json/);

  const blogToDelete = blogResponse.body;

  const blogsAtStart = await helper.blogsInDb();

  const newUser2 = {
    name: 'Random User 2',
    username: 'randomuser2',
    password: 'randompassword2',
  };

  await api
    .post('/api/users')
    .send(newUser2)
    .expect(201)
    .expect('Content-Type', /application\/json/);

  const loginResponse2 = await api
    .post('/api/login')
    .send({ username: newUser2.username, password: newUser2.password })
    .expect(200)
    .expect('Content-Type', /application\/json/);

  const token2 = loginResponse2.body.token;

  await api
    .delete(`/api/blogs/${blogToDelete.id}`)
    .set('Authorization', `Bearer ${token2}`)
    .expect(401)
    .expect('Content-Type', /application\/json/);

  const blogsAtEnd = await helper.blogsInDb();

  assert.strictEqual(blogsAtEnd.length, blogsAtStart.length);
});

test('deletion fails if no token is provided', async () => {
  const newUser = {
    name: 'Random User',
    username: 'randomuser',
    password: 'randompassword',
  };

  await api
    .post('/api/users')
    .send(newUser)
    .expect(201)
    .expect('Content-Type', /application\/json/);

  const loginResponse = await api
    .post('/api/login')
    .send({ username: newUser.username, password: newUser.password })
    .expect(200)
    .expect('Content-Type', /application\/json/);

  const token = loginResponse.body.token;

  const newBlog = {
    title: 'Random Blog',
    author: 'Rando',
    url: 'https://randomblog.com',
    likes: 24,
  };

  const blogResponse = await api
    .post('/api/blogs')
    .send(newBlog)
    .set('Authorization', `Bearer ${token}`)
    .expect(201)
    .expect('Content-Type', /application\/json/);

  const blogToDelete = blogResponse.body;

  const blogsAtStart = await helper.blogsInDb();

  await api
    .delete(`/api/blogs/${blogToDelete.id}`)
    .expect(401)
    .expect('Content-Type', /application\/json/);

  const blogsAtEnd = await helper.blogsInDb();

  assert.strictEqual(blogsAtEnd.length, blogsAtStart.length);
});

describe('when there is initially one user in db', () => {
  beforeEach(async () => {
    await User.deleteMany({});

    const passwordHash = await bcrypt.hash('sekret', 10);
    const user = new User({ username: 'root', passwordHash });

    await user.save();
  });

  test('creation succeeds with a fresh username', async () => {
    const usersAtStart = await helper.usersInDb();

    const newUser = {
      username: 'mluukkai',
      name: 'Matti Luukkainen',
      password: 'salainen',
    };

    await api
      .post('/api/users')
      .send(newUser)
      .expect(201)
      .expect('Content-Type', /application\/json/);

    const usersAtEnd = await helper.usersInDb();
    assert.strictEqual(usersAtEnd.length, usersAtStart.length + 1);

    const usernames = usersAtEnd.map((u) => u.username);
    assert(usernames.includes(newUser.username));
  });

  test('creation fails with proper statuscode and message if username already taken', async () => {
    const usersAtStart = await helper.usersInDb();

    const newUser = {
      username: 'root',
      name: 'Superuser',
      password: 'salainen',
    };

    const result = await api
      .post('/api/users')
      .send(newUser)
      .expect(400)
      .expect('Content-Type', /application\/json/);

    const usersAtEnd = await helper.usersInDb();
    assert(result.body.error.includes('expected `username` to be unique'));

    assert.strictEqual(usersAtEnd.length, usersAtStart.length);
  });

  test('creation fails with proper statuscode and message if username is not provided', async () => {
    const usersAtStart = await helper.usersInDb();

    const newUser = {
      name: 'Superuser',
      password: 'salainen',
    };

    const result = await api
      .post('/api/users')
      .send(newUser)
      .expect(400)
      .expect('Content-Type', /application\/json/);

    const usersAtEnd = await helper.usersInDb();
    assert(result.body.error.includes('username or password missing'));

    assert.strictEqual(usersAtEnd.length, usersAtStart.length);
  });

  test('creation fails with proper statuscode and message if password is not provided', async () => {
    const usersAtStart = await helper.usersInDb();

    const newUser = {
      username: 'root',
      name: 'Superuser',
    };

    const result = await api
      .post('/api/users')
      .send(newUser)
      .expect(400)
      .expect('Content-Type', /application\/json/);

    const usersAtEnd = await helper.usersInDb();
    assert(result.body.error.includes('username or password missing'));

    assert.strictEqual(usersAtEnd.length, usersAtStart.length);
  });

  test('creation fails with proper statuscode and message if username has less than 3 characters', async () => {
    const usersAtStart = await helper.usersInDb();

    const newUser = {
      username: 'ro',
      name: 'Superuser',
      password: 'salainen',
    };

    const result = await api
      .post('/api/users')
      .send(newUser)
      .expect(400)
      .expect('Content-Type', /application\/json/);

    const usersAtEnd = await helper.usersInDb();
    assert(
      result.body.error.includes(
        'both username and password must be at least 3 characters long'
      )
    );

    assert.strictEqual(usersAtEnd.length, usersAtStart.length);
  });

  test('creation fails with proper statuscode and message if password has less than 3 characters', async () => {
    const usersAtStart = await helper.usersInDb();

    const newUser = {
      username: 'root',
      name: 'Superuser',
      password: 'sa',
    };

    const result = await api
      .post('/api/users')
      .send(newUser)
      .expect(400)
      .expect('Content-Type', /application\/json/);

    const usersAtEnd = await helper.usersInDb();
    assert(
      result.body.error.includes(
        'both username and password must be at least 3 characters long'
      )
    );

    assert.strictEqual(usersAtEnd.length, usersAtStart.length);
  });
});

after(async () => {
  await User.deleteMany({});
  await mongoose.connection.close();
});
