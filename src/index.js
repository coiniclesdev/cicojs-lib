var cicojs = require('bitcoinjs-lib')

Object.assign(cicojs.networks, require('./networks'))

cicojs.utils = require('./utils')

module.exports = cicojs
