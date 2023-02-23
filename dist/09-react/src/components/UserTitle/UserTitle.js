"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserTitle = void 0;
const UserTitle_module_scss_1 = __importDefault(require("./UserTitle.module.scss"));
const localDate = new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
});
const UserTitle = ({ name, login, created }) => {
    const joinedDate = localDate.format(new Date(created));
    return (<div className={UserTitle_module_scss_1.default.userTitle}>
      <h2>{name}</h2>
      <h3>{login}</h3>
      <span>{joinedDate}</span>
    </div>);
};
exports.UserTitle = UserTitle;
