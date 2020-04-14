const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {
  const isProduction = env === 'production';
  const CSSExtract = new MiniCssExtractPlugin({ filename: 'styles.css' });

  return {
    mode: isProduction ? 'production' : 'development', 
    entry: './src/app.js',
    output: {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js'
    },
    module: {
      rules: [{
        test: /\.s?css$/,
        use: [
            MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    sourceMap: true
                }
            },
            {
                loader: 'sass-loader',
                options: {
                    sourceMap: true
                }
            }
        ]
       },  
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
    plugins: [
      CSSExtract
    ],
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true
    }
  };
};