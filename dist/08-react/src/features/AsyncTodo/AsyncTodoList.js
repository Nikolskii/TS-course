"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TodoItem_1 = __importDefault(require("components/TodoItem"));
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const redux_hook_1 = require("redux-hook");
const asyncTodoSelectors_1 = require("./asyncTodoSelectors");
const todoAsyncActions_1 = require("./todoAsyncActions");
const AsyncTodoList = () => {
    // const list = useAppSelector((state) => state.todos);
    const { list } = (0, react_redux_1.useSelector)(asyncTodoSelectors_1.selectAsyncTodos);
    const dispatch = (0, redux_hook_1.useAppDispatch)();
    const handleRemoveTodo = (id) => {
        dispatch((0, todoAsyncActions_1.removeTodo)(id));
    };
    const handleToggleTodo = (id) => {
        dispatch((0, todoAsyncActions_1.toggleTodo)(id));
    };
    (0, react_1.useEffect)(() => {
        dispatch((0, todoAsyncActions_1.fetchAllTodos)());
    }, []);
    return (<ul>
      {list.map((todo) => (<TodoItem_1.default key={todo.id} toggleTodo={handleToggleTodo} removeTodo={handleRemoveTodo} {...todo}/>))}
    </ul>);
};
exports.default = AsyncTodoList;
