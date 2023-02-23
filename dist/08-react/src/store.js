"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.store = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const todoSlice_1 = __importDefault(require("features/Todo/todoSlice"));
const asyncTodoSlice_1 = __importDefault(require("features/AsyncTodo/asyncTodoSlice"));
const rootReducer = (0, toolkit_1.combineReducers)({
    todos: todoSlice_1.default,
    asyncTodos: asyncTodoSlice_1.default,
});
exports.store = (0, toolkit_1.configureStore)({
    reducer: rootReducer,
});
