"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const TodoItem = ({ id, title, completed, style = {} }) => {
    return (<li style={Object.assign({ color: 'red', backgroundColor: 'white' }, style)}>
      <input type="checkbox" checked={completed}/>
      <span>{title}</span>
      <span>&times;</span>
    </li>);
};
exports.default = TodoItem;
