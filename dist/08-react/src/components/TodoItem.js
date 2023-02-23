"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const TodoItem = ({ id, title, completed, toggleTodo, removeTodo, style = {}, }) => {
    return (<li style={Object.assign({ backgroundColor: 'white' }, style)}>
      <input type="checkbox" checked={completed} onChange={() => toggleTodo(id)}/>
      <span>{title}</span>
      <span onClick={() => removeTodo(id)}>&times;</span>
    </li>);
};
exports.default = TodoItem;
