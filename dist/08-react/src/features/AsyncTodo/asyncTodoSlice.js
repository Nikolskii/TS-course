"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const toolkit_1 = require("@reduxjs/toolkit");
const todoAsyncActions_1 = require("./todoAsyncActions");
const initialState = {
    status: 'idle',
    list: [],
};
const todoSlice = (0, toolkit_1.createSlice)({
    name: '@todos',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(todoAsyncActions_1.fetchAllTodos.pending, (state) => {
            state.status = 'loading';
        })
            .addCase(todoAsyncActions_1.fetchAllTodos.fulfilled, (state, action) => {
            state.status = 'finished';
            state.list = action.payload;
        })
            .addCase(todoAsyncActions_1.fetchAllTodos.rejected, (state) => {
            state.status = 'error';
        })
            .addCase(todoAsyncActions_1.createTodo.fulfilled, (state, action) => {
            state.list.push(action.payload);
        })
            .addCase(todoAsyncActions_1.removeTodo.fulfilled, (state, action) => {
            state.list = state.list.filter((todo) => todo.id !== action.payload);
        })
            .addCase(todoAsyncActions_1.toggleTodo.fulfilled, (state, action) => {
            const todo = state.list.find((el) => el.id === action.payload.id);
            if (todo) {
                todo.completed = action.payload.completed;
            }
        });
    },
});
exports.default = todoSlice.reducer;
