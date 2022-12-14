module.exports = {
  appName: 'common',
  exposes: {
    './hooks': './src/hooks',
    './tools': './src/tools',
    './inits': './src/inits',
    './components': './src/components',
    './services/api/main': './src/services/api/main.ts',
    './models': './src/models',
  },
}
