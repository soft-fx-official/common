const { ModuleFederationPlugin } = require('webpack').container;
const { dependencies } = require('./package.json')
const path = require('path');


module.exports = {
  entry: "./src/index.ts",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'common',
      filename: 'remoteEntry.js',
      exposes: {
        common: "./src/index.ts"
      },
      shared: {
        ...dependencies,
        'react': {
          singleton: true,
          requiredVersion: dependencies['react'],
        },
      }
    }),
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
