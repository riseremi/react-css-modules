const path = require('path');
module.exports = {
  title: 'My Great Style Guide',
  components: './app/components/**/*.jsx',
  resolver: require('react-docgen').resolver.findAllComponentDefinitions,

  /* eslint-disable no-unused-vars */
  // just to disable unused env warning
  updateWebpackConfig: (webpackConfig, env) => {
    /* eslint-enable no-unused-vars */
    const dir = path.join(__dirname, 'app/components');
    webpackConfig.module.loaders.push(
      {
        test: /\.jsx?$/,
        include: dir,
        loader: 'babel',
      },
      {
        test: /\.styl$/,
        include: dir,
        loaders: [
          'style?sourceMap',
          'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
          'stylus',
        ],
      }
    );
    return webpackConfig;
  },
};
