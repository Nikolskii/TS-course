import { createSlice } from '@reduxjs/toolkit';
import { Todo } from 'types';
import { createTodo, fetchAllTodos } from './todoAsyncActions';

type TodoSlice = {
  status: 'idle' | 'loading' | 'finished' | 'error';
  list: Todo[];
};

const initialState: TodoSlice = {
  status: 'idle',
  list: [],
};

const todoSlice = createSlice({
  name: '@todos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllTodos.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllTodos.fulfilled, (state, action) => {
        state.status = 'finished';
        state.list = action.payload;
      })
      .addCase(fetchAllTodos.rejected, (state) => {
        state.status = 'error';
      })
      .addCase(createTodo.fulfilled, (state, action) => {
        state.list.push(action.payload);
      });
  },
});

export default todoSlice.reducer;
