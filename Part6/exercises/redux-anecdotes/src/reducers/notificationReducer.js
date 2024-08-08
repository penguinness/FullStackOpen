import { createSlice } from '@reduxjs/toolkit';

const notificationSlice = createSlice({
  name: 'notification',
  initialState: 'Welcome to Anecdotes!',
  reducers: {
    setNotification(state, action) {
      return action.payload;
    },
    clearNotification() {
      return '';
    },
  },
});

export const { setNotification, clearNotification } = notificationSlice.actions;

export const displayNotification = (message, timeout) => {
  return (dispatch) => {
    dispatch(setNotification(message));
    setTimeout(() => {
      dispatch(clearNotification());
    }, timeout * 1000);
  };
};

export default notificationSlice.reducer;
