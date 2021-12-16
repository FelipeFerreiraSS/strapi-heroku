module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '1dbb0d23ead5c2e73fd692dc7583393a'),
  },
});
