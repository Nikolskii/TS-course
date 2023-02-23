"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const Button_module_scss_1 = __importDefault(require("./Button.module.scss"));
const Button = ({ children, onClick }) => (<button className={Button_module_scss_1.default.button} onClick={onClick}>
    {children}
  </button>);
exports.Button = Button;
