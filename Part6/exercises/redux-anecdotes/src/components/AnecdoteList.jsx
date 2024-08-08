import { useDispatch, useSelector } from 'react-redux';
import { addVote } from '../reducers/anecdoteReducer';
import { displayNotification } from '../reducers/notificationReducer';

const AnecdoteList = () => {
  const anecdotes = useSelector((state) => {
    console.log(state);
    if (state.filter === '') {
      return state.anecdotes;
    }
    return state.anecdotes.filter((anecdote) =>
      anecdote.content.toLowerCase().includes(state.filter.toLowerCase())
    );
  });

  console.log('anecdotes is', anecdotes);
  const dispatch = useDispatch();

  const vote = (id) => {
    const anecdote = anecdotes.find((a) => a.id === id);
    console.log('anecdote is', anecdote);
    dispatch(addVote(id));
    dispatch(displayNotification(`you voted '${anecdote.content}' !`, 5));
  };

  return (
    <div>
      {[...anecdotes]
        .sort((a, b) => b.votes - a.votes)
        .map((anecdote) => (
          <div key={anecdote.id}>
            <div>{anecdote.content}</div>
            <div>
              has {anecdote.votes}
              <button onClick={() => vote(anecdote.id)}>vote</button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default AnecdoteList;
