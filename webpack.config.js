const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = (env) => ({
  mode: env.NODE_ENV === 'production' ? 'production': 'development',
  entry: './src/index.tsx',
  devtool: env.NODE_ENV === 'production' ? 'source-map' : 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }, 
      {
        test: /\.css$/,
        use: [
          {
            loader: env.NODE_ENV === 'production' ?
            MiniCssExtractPlugin.loader :
            'style-loader',
          },
          {
            loader: 'typings-for-css-modules-loader',
            options: {
              localIdentName: env.NODE_ENV === 'production'
              ? '[hash:base64]'
              : '[name]__[local]__[hash:base64:5]',
              modules: true,
              namedExport: true,
            },
          }
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ],
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.mjs', '.js' ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new CopyWebpackPlugin([
      'public/index.html',
    ]),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
  ],
});
