"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.toggleTodo = exports.removeTodo = exports.createTodo = exports.fetchAllTodos = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
exports.fetchAllTodos = (0, toolkit_1.createAsyncThunk)('todos/fetchTodos', () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');
    return (yield response.json());
}));
exports.createTodo = (0, toolkit_1.createAsyncThunk)('todos/createTodo', (text) => __awaiter(void 0, void 0, void 0, function* () {
    const newTodo = {
        title: text,
        userId: 1,
        completed: false,
    };
    const response = yield fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTodo),
    });
    return (yield response.json());
}));
exports.removeTodo = (0, toolkit_1.createAsyncThunk)('todos/removeTodo', (id, { rejectWithValue }) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch('https://jsonplaceholder.typicode.com/todos/' + id, {
        method: 'DELETE',
    });
    if (!response.ok) {
        return rejectWithValue('Impossible to delete todo with id ' + id);
    }
    return id;
}));
exports.toggleTodo = (0, toolkit_1.createAsyncThunk)('todos/toggleTodo', (id, { getState, rejectWithValue }) => __awaiter(void 0, void 0, void 0, function* () {
    const todo = getState().asyncTodos.list.find((el) => el.id === id);
    if (todo) {
        const response = yield fetch('https://jsonplaceholder.typicode.com/todos/' + id, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                completed: !todo.completed,
            }),
        });
        if (!response.ok) {
            return rejectWithValue('Impossible to update todo with id ' + id);
        }
        return yield response.json();
    }
    return rejectWithValue('No such todo with ' + id);
}));
