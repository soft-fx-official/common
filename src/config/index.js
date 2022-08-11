const lodash = require('lodash')

const configBase = require('./configs/base.json')
const configDevelopment = require('./configs/development.json')
const configProduction = require('./configs/production.json')
const configTest = require('./configs/test.json')

const configs = {
  test: configTest,
  development: configDevelopment,
  production: configProduction,
}

// NOTE: Other deployments
module.exports = lodash.merge(configBase, configs[process.env.NODE_ENV || 'development'])
