"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserInfo = void 0;
const icon_company_svg_1 = require("assets/icon-company.svg");
const icon_location_svg_1 = require("assets/icon-location.svg");
const icon_twitter_svg_1 = require("assets/icon-twitter.svg");
const icon_website_svg_1 = require("assets/icon-website.svg");
const InfoItem_1 = require("components/InfoItem");
const UserInfo_module_scss_1 = __importDefault(require("./UserInfo.module.scss"));
const UserInfo = ({ blog, company, location, twitter, }) => {
    const items = [
        {
            icon: <icon_location_svg_1.ReactComponent />,
            text: location,
        },
        {
            icon: <icon_website_svg_1.ReactComponent />,
            text: blog,
            isLink: true,
        },
        {
            icon: <icon_twitter_svg_1.ReactComponent />,
            text: twitter,
        },
        {
            icon: <icon_company_svg_1.ReactComponent />,
            text: company,
        },
    ];
    return (<div className={UserInfo_module_scss_1.default.userInfo}>
      {items.map((item, index) => (<InfoItem_1.InfoItem {...item} key={index}/>))}
    </div>);
};
exports.UserInfo = UserInfo;
