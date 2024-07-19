module.exports = {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/login',
          permanent: false,
          has: [
            {
              type: 'cookie',
              key: 'token',
              value: '',
            },
          ],
        },
      ];
    },
  };
  