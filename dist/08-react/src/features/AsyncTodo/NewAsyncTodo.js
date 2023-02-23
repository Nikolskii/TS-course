"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const NewItem_1 = __importDefault(require("components/NewItem"));
const redux_hook_1 = require("redux-hook");
const todoAsyncActions_1 = require("./todoAsyncActions");
const NewAsyncTodo = () => {
    const dispatch = (0, redux_hook_1.useAppDispatch)();
    const handleNewTodo = (title) => {
        dispatch((0, todoAsyncActions_1.createTodo)(title));
    };
    return <NewItem_1.default handleClick={handleNewTodo} placeholder="add new todo"/>;
};
exports.default = NewAsyncTodo;
