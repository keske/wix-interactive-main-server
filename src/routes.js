// @flow

import get from './get';
import post from './post';

export default (app: *) => (
  app
    .get('/', (req, res) => (
      get(req, res)
    ))
    .post('/', (req, res) => (
      post(req, res)
    ))
);
