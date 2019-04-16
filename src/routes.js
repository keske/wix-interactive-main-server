// @flow

import get from './routes/get';
import post from './routes/post';
import remove from './routes/remove';
import update from './routes/update';

import type { Synth } from './types';

export default (app: *) => (
  app
    .get('/', (req, res): Promise<Array<Synth>> => (
      get(req, res)
    ))
    .post('/', (req, res): Promise<Synth> => (
      post(req, res)
    ))
    .patch('/', (req, res): Promise<Synth> => (
      update(req, res)
    ))
    .delete('/', (req, res): Promise<Synth> => (
      remove(req, res)
    ))
);
