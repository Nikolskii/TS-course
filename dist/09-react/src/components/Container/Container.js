"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Container = void 0;
const Container_module_scss_1 = __importDefault(require("./Container.module.scss"));
const Container = ({ children }) => (<div className={Container_module_scss_1.default.container}>{children}</div>);
exports.Container = Container;
