"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Search = void 0;
const icon_search_svg_1 = require("assets/icon-search.svg");
const Button_1 = require("components/Button");
const Search_module_scss_1 = __importDefault(require("./Search.module.scss"));
const Search = ({ hasError, onSubmit }) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const text = event.currentTarget.username.value;
        if (text.trim()) {
            onSubmit(text);
            event.currentTarget.reset();
        }
    };
    return (<form onSubmit={handleSubmit} autoComplete="off">
      <div className={Search_module_scss_1.default.search}>
        <label htmlFor="search" className={Search_module_scss_1.default.label}>
          <icon_search_svg_1.ReactComponent />
        </label>
        <input type="text" className={Search_module_scss_1.default.textField} id="search" name="username" placeholder="Search Github username"/>
        {hasError && <div className={Search_module_scss_1.default.error}>No result</div>}
        <Button_1.Button>Search</Button_1.Button>
      </div>
    </form>);
};
exports.Search = Search;
