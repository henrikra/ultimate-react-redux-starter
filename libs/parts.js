const webpack = require('webpack');

exports.devServer = function() {
  return {
    devServer: {
      historyApiFallback: true,
      hot: true,
      inline: true,
      stats: 'errors-only',
      host: '0.0.0.0',
      watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
      }
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin({multiStep: true})
    ]
  };
}
