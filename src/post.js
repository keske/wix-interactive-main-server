// @flow

import R from 'ramda';

export default async (req: any, res: any): Promise<void> => (
  R.pipe(
    ({ data }) => (
      R.cond([
        [R.isNil, () => {
          res
            .status(400)
            .end();
        }],
        [R.T, async () => {
          res
            .status(200)
            .send({
              post: true,
            })
            .end();
        }],
      ])(data)
    ),
  )({
    data: R.path(['body'], req),
  })
);
