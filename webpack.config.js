const CopyWebpackPlugin = require('copy-webpack-plugin');
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
      }
    ]
  },
  resolve: {
    alias: {
      COMPONENTS: path.resolve(__dirname, 'src/components/'),
      DUCKS: path.resolve(__dirname, 'src/ducks/'),
      STORE: path.resolve(__dirname, 'src/store/'),
    },
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
  ],
});
