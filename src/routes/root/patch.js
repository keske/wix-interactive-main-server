// @flow

import R from 'ramda';

import devices from '../../devices';

import type { Synth } from '../../types';

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
          const { id, device } = req.body;

          R.pipe(
            R.findIndex(R.propEq('id', id)),
            (index) => {
              devices[index] = {
                ...devices[index],
                ...device,
              };

              res
                .status(200)
                .send(devices[index])
                .end();
            },
          )(devices);
        }],
      ])(data)
    ),
  )({
    data: R.path(['body'], req),
  })
);
