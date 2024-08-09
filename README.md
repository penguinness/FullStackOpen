# FullStackOpen

This repository contains my work (lectures and assignments) for the [University of Helsinki's Full Stack Open curriculum.](https://fullstackopen.com/en)

## Part 0: Fundamentals of Web apps

These are some preliminary diagrams to understand how web applications work under the hood

- [New note diagram](./Part0/0.4.new-note-diagram.md)

- [Single-page-app diagram](./Part0/0.5.spa-diagram.md)

- [New note single-page-app diagram](./Part0/0.6.new-note-spa-diagram.md)

## Part 1: Introduction to React

In Part 1, I made some React apps which interactively render information on the browser.

What I learned: Event handling, component handling, state handling (useState, useEffect), conditional rendering.

- [Greetings](./Part1/lectures/greetings/)

- [Counter](./Part1/lectures/counter/)

- [LeftRight](./Part1/lectures/leftright/)

- [StrangeCounter](./Part1/lectures/strangecounter/)

- [Anecdotes](./Part1/exercises/anecdotes/)

- [CourseInfo](./Part1/exercises/courseinfo/)

- [UniCafe](./Part1/exercises/unicafe/)

## Part 2: Communicating with server

In Part 2, I made some React apps which communicate with JSON objects/servers.

What I learned: Array handling, forms handling, server communication (GET, PUT, POST, DELETE), error handling, exception handling, API fetching.

Note: Part 2's CourseInfo is an improvement of Part 1's CourseInfo

- [Notes](./Part2/lectures/notes/)

- [ExchangeRate](./Part2/lectures/exchangerate/)

- [Countries](./Part2/exercises/countries/)

- [CourseInfo](./Part2/exercises/courseinfo/)

- [Phonebook](./Part2/exercises/phonebook/)

## Part 3: Programming a server with NodeJS and Express

In Part 3, I made some backend servers using Node and Express.

What I learned: Node JS, Express JS, morgan, cors, nodemon, Postman, middleware, deployment, MongoDB, validation, linting.

Note: Part 3's Notes is a slightly modified version of Part 2's Notes for integration purposes.

- [Notes](./Part3/lectures/notes/)

- [NotesBackend](./Part3/lectures/notes-backend/)

  The site is deployed here (add `/api/notes` to the end of the url to see the backend resource): https://notes-backend-autumn-cloud-5066.fly.dev/

- [PhonebookBackend](./Part3/exercises/phonebook-backend/)

  The site is deployed here (add `/api/persons` to the end of the url to see the backend resource): https://phonebook-backend-black-meadow-4882.fly.dev/

## Part 4: Testing Express servers, user administration

In Part 4, I made some backend applications, wrote unit tests for them, and integrated user administration and token authentication.

What I learned: Project structuring, lodash, supertest, backend unit testing, asynchronous operation (async/await), user administration, bcrypt, token authentication (jsonwebtoken), populate.

Note: Part 4's Notes project is a vastly extended version of Part 3's Notes project.

- [Notes](./Part4/lectures/notes/)

- [NotesBackend](./Part4/lectures/notes-backend/)

- [BloglistBackend](./Part4/exercises/bloglist-backend/)

## Part 5: Testing React apps

In Part 5, I integrated user administration and token authentication into the frontend of some applications, wrote unit tests for them, and wrote end-to-end tests using Playwright.

What I learned: Login on frontend (with token authentication), local storage, props.children, proptypes, useRef, forwardRef, useImperativeHandle, state lifting, frontend unit testing (vitest), render, screen, mock functions, end-to-end testing (Playwright).

Note: Part 5's Notes project is a vastly extended version of Part 4's Notes project.

- [Notes](./Part5/lectures/notes/)

- [NotesBackend](./Part5/lectures/notes-backend/)

- [BloglistFrontend](./Part5/exercises/bloglist-frontend/)

## Part 6: Testing React apps

In Part 6, I created several front-end applications using Redux, React Query, and the Context API, and made them communicate with json-servers.

What I learned: Redux, Redux Toolkit, Redux Thunk, React Query, Context API (useReducer, createContext, useContext).

- [ReduxCounter](./Part6/lectures/redux-counter/)

- [ReduxUnicafe](./Part6/exercises/redux-unicafe/)

- [ReduxNotes](./Part6/lectures/redux-notes/)

- [ReduxAnecdotes](./Part6/exercises/redux-anecdotes/)

- [QueryNotes](./Part6/lectures/query-notes/)

- [QueryAnecdotes](./Part6/exercises/query-anecdotes/)

- [HookCounter](./Part6/lectures/hook-counter/)
