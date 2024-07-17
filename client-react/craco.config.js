// craco.config.js
module.exports = {
    webpack: {
      configure: {
        resolve: {
          fallback: {
            http: require.resolve('stream-http'),
            https: require.resolve('https-browserify'),
            zlib: require.resolve('browserify-zlib'),
            url: require.resolve('url/'),
            crypto: require.resolve('crypto-browserify'),
            stream: require.resolve('stream-browserify')
          }
        }
      }
    }
  };
  