"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Container_1 = require("components/Container");
const Search_1 = require("components/Search");
const TheHeader_1 = require("components/TheHeader");
const UserCard_1 = require("components/UserCard");
const react_1 = require("react");
const extract_local_user_1 = require("utils/extract-local-user");
const typeguards_1 = require("utils/typeguards");
const BASE_URL = 'https://api.github.com/users/';
function App() {
    const [user, setUser] = (0, react_1.useState)(null);
    const fetchUser = (username) => __awaiter(this, void 0, void 0, function* () {
        const url = BASE_URL + username;
        const res = yield fetch(url);
        const user = (yield res.json());
        if ((0, typeguards_1.isGithubUser)(user)) {
            setUser((0, extract_local_user_1.extractLocalUser)(user));
        }
        else {
            setUser(null);
        }
    });
    return (<Container_1.Container>
      <TheHeader_1.TheHeader />
      <Search_1.Search hasError={!user} onSubmit={fetchUser}/>
      {user && <UserCard_1.UserCard {...user}/>}
    </Container_1.Container>);
}
exports.default = App;
