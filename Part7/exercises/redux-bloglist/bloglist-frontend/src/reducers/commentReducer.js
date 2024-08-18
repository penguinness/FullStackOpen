import { createSlice } from '@reduxjs/toolkit';
import blogService from '../services/blogs';

const commentSlice = createSlice({
  name: 'comment',
  initialState: '',
  reducers: {
    setComment(state, action) {
      return action.payload;
    },
    clearComment() {
      return '';
    },
  },
});

export const { setComment, clearComment } = commentSlice.actions;
export default commentSlice.reducer;
