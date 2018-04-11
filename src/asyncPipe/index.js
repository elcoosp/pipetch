const composeM = require('../composeM')

const asyncPipe = composeM('then')

module.exports = asyncPipe
