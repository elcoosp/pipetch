const pipetch = require('../pipetch')
const pipe = require('../pipe')
const arrayize = require('../arrayize')
const makeKeysMapper = require('../makeKeysMapper')

// Sugar
const json = res => res.json()
const map = mapper => arr => arr.map(mapper)

/**
 * @param  {function} fetcher Fetch provider promise-aware function
 * @param  {Object} keysMapper Object of tuple key mapping function
 * @param  {...function} [transformers] Optionnal transformers applied to the whole list retrieved
 * @param  {*} fetchArgs Fetching args from the fetcher function
 * @returns  {(keysMapper: Object, transformers: ...function) => (fetchArgs: *) => Promise}
 */

const pipetchReduce = fetcher => (keysMapper, ...transformers) => (
  ...fetchArgs
) =>
  pipetch(fetcher)(...fetchArgs)(
    json,
    arrayize,
    map(pipe(...makeKeysMapper(keysMapper))),
    ...transformers
  )

module.exports = pipetchReduce
