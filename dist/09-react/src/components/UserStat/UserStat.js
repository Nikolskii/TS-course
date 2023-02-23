"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserStat = void 0;
const UserStat_module_scss_1 = __importDefault(require("./UserStat.module.scss"));
const UserStat = ({ repos, followers, following }) => (<div className={UserStat_module_scss_1.default.userStat}>
    <div className={UserStat_module_scss_1.default.info}>
      <div className={UserStat_module_scss_1.default.infoTitle}>Repos</div>
      <div className={UserStat_module_scss_1.default.infoNumber}>{repos}</div>
    </div>
    <div className={UserStat_module_scss_1.default.info}>
      <div className={UserStat_module_scss_1.default.infoTitle}>Following</div>
      <div className={UserStat_module_scss_1.default.infoNumber}>{following}</div>
    </div>
    <div className={UserStat_module_scss_1.default.info}>
      <div className={UserStat_module_scss_1.default.infoTitle}>Followers</div>
      <div className={UserStat_module_scss_1.default.infoNumber}>{followers}</div>
    </div>
  </div>);
exports.UserStat = UserStat;
