const path = require('path');

module.exports = {
  mode: "development", // Это должна была быть строка - сорян
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.s?css$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]},    
      {
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/,
      options: {
        presets: [
          "@babel/preset-env",
          "@babel/preset-react"
        ],
        plugins: [
          "@babel/plugin-proposal-class-properties"
        ]
      }
    }]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true
  }
};