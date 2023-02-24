import { Axios } from 'axios';
import * as API from 'config';

export type Extra = {
  client: Axios;
  api: typeof API;
};
