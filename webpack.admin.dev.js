const path = require('path');
const webpack = require('webpack');
const common = require('./webpack.admin.common.js');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'admin'),
    port: 6060,
    hot: true,
    inline: true
  },
  plugins: [

    // generates html file with all webpack bundles included in script tag
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'admin/index.html'),
      favicon: path.resolve(__dirname, 'admin/static/images/favicon.png'),
      inject: 'body'
    }),

    //prevents webpack CLI from stopping due to errors
    new webpack.NoEmitOnErrorsPlugin(),

    //improve logging in the console
    new webpack.NamedModulesPlugin(),

    // see changes without reloading browser
    new webpack.HotModuleReplacementPlugin(),

    // passes variables from webpack to js files
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV':JSON.stringify('development')
      }
    })

  ],
  externals: {
    config: JSON.stringify(require("./admin/config/config.dev.js"))
  }
});
