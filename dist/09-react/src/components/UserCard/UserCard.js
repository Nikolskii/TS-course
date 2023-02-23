"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCard = void 0;
const UserInfo_1 = require("components/UserInfo");
const UserStat_1 = require("components/UserStat");
const UserTitle_1 = require("components/UserTitle");
const UserCard_module_scss_1 = __importDefault(require("./UserCard.module.scss"));
const UserCard = (props) => (<div className={UserCard_module_scss_1.default.userCard}>
    <img src={props.avatar} alt={props.login} className={UserCard_module_scss_1.default.avatar}/>
    <UserTitle_1.UserTitle name={props.name} login={props.login} created={props.created}/>
    <p className={`${UserCard_module_scss_1.default.bio}${props.bio ? '' : ` ${UserCard_module_scss_1.default.empty}`}`}>
      {props.bio || 'This profile has no bio'}
    </p>
    <UserStat_1.UserStat repos={props.repos} followers={props.followers} following={props.following}/>
    <UserInfo_1.UserInfo blog={props.blog} company={props.company} location={props.location} twitter={props.twitter}/>
  </div>);
exports.UserCard = UserCard;
