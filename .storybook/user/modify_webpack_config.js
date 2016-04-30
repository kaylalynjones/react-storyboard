module.exports = function (config) {
  // This is the default webpack config defined in the `../webpack.config.js`
  // modify as you need.

  config.module.loaders.push({
    test: /\.scss$/,
    loaders: ['style', 'css', 'sass'],
  });
};
