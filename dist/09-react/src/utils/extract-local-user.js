"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractLocalUser = void 0;
const extractLocalUser = (user) => ({
    login: user.login,
    avatar: user.avatar_url,
    name: user.name,
    bio: user.bio,
    blog: user.blog,
    company: user.company,
    created: user.created_at,
    followers: user.followers,
    following: user.following,
    location: user.location,
    repos: user.public_repos,
    twitter: user.twitter_username,
});
exports.extractLocalUser = extractLocalUser;
