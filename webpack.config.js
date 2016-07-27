const webpack = require('webpack');
const path = require('path');

const PROD = process.env.NODE_ENV === 'production';

module.exports = {
  entry: [
    './app/Application.jsx',
  ],
  devtool: PROD ? null : 'source-map',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loaders: ['react-hot', 'babel'],
      },
      {
        test: /\.styl$/,
        loaders: [
          'style?sourceMap',
          'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
          'stylus',
        ],
      },
    ],
  },
  devServer: {
    contentBase: './public',
    noInfo: true,
    hot: true,
    inline: true,
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      __DEV__: !PROD,
      'process.env': {
        NODE_ENV: JSON.stringify(PROD ? 'production' : 'development'),
      },
    }),
  ],
};

if (!PROD) {
  module.exports.entry.push(
    'webpack-dev-server/client?http://0.0.0.0:8080',
    'webpack/hot/only-dev-server'
  );
}

if (PROD) {
  module.exports.plugins.push(
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        unused: true,
        dead_code: true,
        screw_ie8: true,
        unsafe: true,
        warnings: false,
      },
    })
  );
}
