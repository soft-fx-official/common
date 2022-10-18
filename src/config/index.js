const merge = require('lodash/merge')

const baseConfig = require('./configs/main.js')
const baseLocalConfig = require('./configs/main.local.js')

const deploymentConfig = {
  qa: require('./configs/qa.js'),
  release: require('./configs/release.js'),
}

module.exports =
  process.env.NODE_ENV === 'production'
    ? merge(baseConfig, deploymentConfig[process.env.REACT_APP_BRANCH])
    : merge(baseConfig, baseLocalConfig)
