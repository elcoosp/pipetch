const mapKey = require('../mapKey')

/**
 * Take an object and return an array of corresponding mapKey
 * @param  {Object} mapKeyObject - An object with key/function tuple to map
 * @returns {[...function]} An array of mapKey functions ready to execute
 */
const makeKeysMapper = mapKeyObject =>
  Object.entries(mapKeyObject).reduce(
    (acc, [k, f]) => [...acc, mapKey(k)(f)],
    []
  )

module.exports = makeKeysMapper
