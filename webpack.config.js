var webpack = require("webpack");
var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
  entry: {
    app: "./src/entry.js"
  },
  output: {
    path: path.resolve('./build/'),
    filename: "build.js"
  }, 
  module:{
    loaders: [
      {
            test: /\.scss$/,
            exclude: /node_modules/,
            loader: "style-loader!css-loader!sass-loader"
      }, 
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
    ]
  },
  plugins: [
        new CopyWebpackPlugin([
              { from: './src/index.html', to: './index.html' },
              { from: './src/img', to: 'img' }
            ])
  ],
  devServer: {
      historyApiFallback: {
          app: 'index.html',
          rewrites: [
              { from: /\/*/,  to: 'index.html' }]
      },
      //contentBase: 'build',
      // proxy: {
      //     '/api/*': {
      //         target: 'http://localhost:3000',
      //         secure: false,
      //     }
      // }
  }  
};