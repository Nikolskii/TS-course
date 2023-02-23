"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemeSwitcher = void 0;
const icon_moon_svg_1 = require("assets/icon-moon.svg");
const icon_sun_svg_1 = require("assets/icon-sun.svg");
const react_1 = require("react");
const ThemeSwitcher_module_scss_1 = __importDefault(require("./ThemeSwitcher.module.scss"));
const ThemeSwitcher = () => {
    const [isDark, setDark] = (0, react_1.useState)(false);
    const themeText = isDark ? 'Light' : 'Dark';
    const ThemeIcon = isDark ? icon_sun_svg_1.ReactComponent : icon_moon_svg_1.ReactComponent;
    (0, react_1.useEffect)(() => {
        document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');
    }, [isDark]);
    return (<div className={ThemeSwitcher_module_scss_1.default.switcher} onClick={() => setDark(!isDark)}>
      <span>{themeText}</span>
      <ThemeIcon className="styles.icon"/>
    </div>);
};
exports.ThemeSwitcher = ThemeSwitcher;
