const { ModuleFederationPlugin } = require('webpack').container
const FederatedTypesPlugin = require('wmftypes')
const { dependencies } = require('./package.json')

module.exports = {
  webpack: function (webpackConfig, env) {
    webpackConfig.output.publicPath = 'auto'
    webpackConfig.output.uniqueName = 'common'

    webpackConfig.plugins = [
      ...webpackConfig.plugins,
      new ModuleFederationPlugin({
        name: 'common',
        filename: 'remoteEntry.js',
        exposes: {
          './hooks': './src/hooks',
          './tools': './src/tools',
        },
        remotes: {},
        shared: {
          ...dependencies,
          react: {
            singleton: true,
            requiredVersion: dependencies['react'],
          },
          'react-dom': {
            singleton: true,
            requiredVersion: dependencies['react-dom'],
          },
          'react-router-dom': {
            singleton: true,
            requiredVersion: dependencies['react-router-dom'],
          },
        },
      }),
      new FederatedTypesPlugin(),
    ]

    return webpackConfig
  },
}
