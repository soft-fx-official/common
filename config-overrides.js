const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin
const { dependencies } = require('./package.json')

module.exports = {
  webpack: function(webpackConfig, env) {
    webpackConfig.output.publicPath = 'auto'
    webpackConfig.output.uniqueName = 'common1'

    webpackConfig.plugins = [
      ...webpackConfig.plugins,
      new ModuleFederationPlugin({
        name: 'common1',
        filename: 'remoteEntry.js',
        exposes: {
          './hooks': './src/hooks'
        },
        remotes: {},
        shared: {
          ...dependencies,
          'react': {
            singleton: true,
            requiredVersion: dependencies['react'],
          },
          'react-dom': {
            singleton: true,
            requiredVersion: dependencies['react-dom'],
          },
          "react-router-dom": {
            singleton: true,
            requiredVersion: dependencies["react-router-dom"],
          },
        },
      }),
    ]

    return webpackConfig
  },
}
