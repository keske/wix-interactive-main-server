// @flow

import * as main from './routes/root';
import * as animation from './routes/animation';

import type { Synth } from './types';

export default (app: *) => (
  app
    .get('/', (req, res): Promise<Array<Synth>> => (
      main.get(req, res)
    ))
    .post('/', (req, res): Promise<Synth> => (
      main.post(req, res)
    ))
    .patch('/', (req, res): Promise<Synth> => (
      main.patch(req, res)
    ))
    .delete('/', (req, res): Promise<Synth> => (
      main.remove(req, res)
    ))
    .post('/animation', (req, res): Promise<Synth> => (
      animation.post(req, res)
    ))
);
