// @flow

import devices from '../../devices';

import type { Synth } from '../../types';

export default async (req: any, res: any): Promise<Array<Synth>> => {
  res
    .status(200)
    .send(devices)
    .end();
};
