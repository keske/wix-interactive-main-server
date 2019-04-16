// @flow

import get from './routes/get';
import post from './routes/post';
import remove from './routes/remove';
import patch from './routes/patch';

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
      patch(req, res)
    ))
    .delete('/', (req, res): Promise<Synth> => (
      remove(req, res)
    ))
);
