// @flow

import R from 'ramda';

export default async (req: any, res: any): Promise<void> => {
  console.log('get');

  res
    .status(200)
    .send({
      get: true,
    })
    .end();
};
