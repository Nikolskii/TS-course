"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TodoItem_1 = __importDefault(require("components/TodoItem"));
const react_redux_1 = require("react-redux");
const redux_hook_1 = require("redux-hook");
const todoSelectors_1 = require("./todoSelectors");
const todoSlice_1 = require("./todoSlice");
const TodoList = () => {
    // const list = useAppSelector((state) => state.todos);
    const list = (0, react_redux_1.useSelector)(todoSelectors_1.selectAllTodos);
    const dispatch = (0, redux_hook_1.useAppDispatch)();
    const handleRemoveTodo = (id) => {
        dispatch((0, todoSlice_1.removeTodo)(id));
    };
    const handleToggleTodo = (id) => {
        dispatch((0, todoSlice_1.toggleTodo)(id));
    };
    return (<ul>
      {list.map((todo) => (<TodoItem_1.default key={todo.id} toggleTodo={handleToggleTodo} removeTodo={handleRemoveTodo} {...todo}/>))}
    </ul>);
};
exports.default = TodoList;
