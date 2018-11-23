const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const updateEnv = require('./updateEnv');

const ENV_KEYS=['HELLO_ENDPOINT'];

const validEnv = updateEnv(ENV_KEYS);
if (!validEnv) { throw new Error('Invalid Environment'); }
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
      }
    ]
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
    new webpack.EnvironmentPlugin(ENV_KEYS),
  ],
});
