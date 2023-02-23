"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InfoItem = void 0;
const InfoItem_module_scss_1 = __importDefault(require("./InfoItem.module.scss"));
const InfoItem = ({ icon, text, isLink }) => {
    const currentText = text || 'Not Available';
    let currentHref;
    if (isLink) {
        currentHref = text && text.startsWith('http') ? text : `https://${text}`;
    }
    return (<div className={`${InfoItem_module_scss_1.default.infoItem}${text ? '' : ` ${InfoItem_module_scss_1.default.empty}`}`}>
      {icon}
      <div>
        {isLink && text ? (<a href={currentHref} target="_blank" rel="noreferrer" className={InfoItem_module_scss_1.default.link}>
            {currentText}
          </a>) : (currentText)}
      </div>
    </div>);
};
exports.InfoItem = InfoItem;
