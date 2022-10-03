const lodash = require('lodash')

const baseConfig = require('./configs/main.js')
const baseLocalConfig = require('./configs/main.local.js')

const deploymentConfig = {
  beta: require('./configs/beta.js'),
  alpha: require('./configs/alpha.js'),
  release: require('./configs/release.js'),
}

const config =
  process.env.NODE_ENV === 'production'
    ? lodash.merge(baseConfig, deploymentConfig[process.env.REACT_APP_BRANCH])
    : lodash.merge(baseConfig, baseLocalConfig)

module.exports = config
