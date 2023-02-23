"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TodoList_1 = __importDefault(require("./features/Todo/TodoList"));
const NewTodo_1 = __importDefault(require("features/Todo/NewTodo"));
require("./App.css");
const NewAsyncTodo_1 = __importDefault(require("features/AsyncTodo/NewAsyncTodo"));
const AsyncTodoList_1 = __importDefault(require("features/AsyncTodo/AsyncTodoList"));
function App() {
    return (<div className="App">
      <NewTodo_1.default />
      <TodoList_1.default />
      <hr />
      <NewAsyncTodo_1.default />
      <AsyncTodoList_1.default />
    </div>);
}
exports.default = App;
