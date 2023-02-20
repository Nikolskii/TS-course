import { GithubUser } from 'types';

export const isGithubUser = (user: any): user is GithubUser => 'id' in user;
