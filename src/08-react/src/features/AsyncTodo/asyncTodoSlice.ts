import { createSlice } from '@reduxjs/toolkit';
import { Todo } from 'types';

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
  // initialState: [] as Todo[],
  initialState,
  reducers: {},
});

export default todoSlice.reducer;
