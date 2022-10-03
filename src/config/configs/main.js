const config = {
  appName: 'common',
  exposes: {
    './hooks': './src/hooks',
    './tools': './src/tools',
    './inits': './src/inits',
  },
  remotes: {},
}

module.exports = config
