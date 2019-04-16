// @flow

import R from 'ramda';

import devices from '../devices';

import type { Synth } from '../types';

export default async (req: any, res: any): Promise<Synth> => (
  R.pipe(
    ({ data }) => (
      R.cond([
        [R.isNil, () => {
          res
            .status(400)
            .end();
        }],
        [R.T, async () => {
          const device: Synth = req.body;

          devices.push(device);

          res
            .status(200)
            .send(device)
            .end();
        }],
      ])(data)
    ),
  )({
    data: R.path(['body'], req),
  })
);
