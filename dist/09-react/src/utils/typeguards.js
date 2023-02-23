"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isGithubUser = void 0;
const isGithubUser = (user) => 'id' in user;
exports.isGithubUser = isGithubUser;
