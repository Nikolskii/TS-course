"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const NewItem = ({ placeholder, handleClick }) => {
    const inputRef = (0, react_1.useRef)(null);
    const onClick = () => {
        if (inputRef.current) {
            handleClick(inputRef.current.value);
            inputRef.current.value = '';
        }
    };
    return (<>
      <input type="text" placeholder={placeholder} ref={inputRef}/>
      <button onClick={onClick}>Add todo</button>
    </>);
};
exports.default = NewItem;
