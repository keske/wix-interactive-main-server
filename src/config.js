import R from 'ramda';

export default (
  R.pipe(
    R.always({
      development: {
        port: 3030,
      },
      production: {
        port: 3030,
      },
    }),
    R.prop(process.env.NODE_ENV),
  )()
);
