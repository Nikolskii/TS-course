"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TheHeader = void 0;
const ThemeSwitcher_1 = require("components/ThemeSwitcher");
const TheHeader_module_scss_1 = __importDefault(require("./TheHeader.module.scss"));
const TheHeader = () => (<div className={TheHeader_module_scss_1.default.header}>
    <div className={TheHeader_module_scss_1.default.logo}>devfinder</div>
    <ThemeSwitcher_1.ThemeSwitcher />
  </div>);
exports.TheHeader = TheHeader;
