"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeTodo = exports.toggleTodo = exports.addTodo = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = [];
const todoSlice = (0, toolkit_1.createSlice)({
    name: '@todos',
    // initialState: [] as Todo[],
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: new Date().toString(),
                title: action.payload,
                completed: false,
            };
            return [newTodo, ...state];
        },
        toggleTodo: (state, action) => {
            const todo = state.find((el) => el.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
        removeTodo: (state, action) => {
            return state.filter((todo) => todo.id !== action.payload);
        },
    },
});
exports.default = todoSlice.reducer;
_a = todoSlice.actions, exports.addTodo = _a.addTodo, exports.toggleTodo = _a.toggleTodo, exports.removeTodo = _a.removeTodo;
