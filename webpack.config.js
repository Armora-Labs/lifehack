const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  mode: 'development',
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  plugins: [new HtmlWebpackPlugin({
    template: './client/index.html'
  })],
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: 'defaults' }],
              ['@babel/preset-react', { targets: 'defaults' }]
            ]
          }
        }
      },
      {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }, {
          loader: 'sass-loader'
        }]
      }
    ]
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'build'),
      publicPath: '/'
    },
    compress: true,
    port: 8080,
    proxy: {
      '/': 'http://localhost:3000'
    }
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
}
