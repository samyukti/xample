var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  cache: true,
  entry: {
    app: './src/index.js',
    vendor: './src/vendor.js',
  },
  output: {
    path: './public/static/',
    publicPath: '/static/',
    filename: 'index.js',
    hash: true
  },
  module: {
    loaders: [
      { test: /\.css$/,
        include: /src/,
        loader: 'style!css'
      },
      { test: /\.(eot|svg|ttf|woff2?)$/,
        include: /src/,
        loader: 'file-loader'
      },
      { test: /\.(jpe?g|png|gif|svg)$/,
        include: /src/,
        loader: 'file-loader'
      },
      { test: /\.json$/,
        include: /src/,
        loader: 'json-loader'
      },
      { test: /\.html$/,
        include: /src/,
        loader: 'riotjs'
      },
      { test: /\.js$/,
        include: /src/,
        exclude: /(node_modules|bower_components|external)/,
        loader: 'babel',
        query: {modules: 'common'}
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      riot: 'riot'
    }),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: '../index.html'
    })
  ],
  devServer: {
    port: 5555
  },
  devtool: 'source-map'
}
