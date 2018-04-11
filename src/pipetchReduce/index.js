const pipetch = require('../pipetch')
const pipe = require('../pipe')
const makeKeysMapper = require('../makeKeysMapper')

// Sugar
const json = res => JSON.parse(res)
const map = mapper => arr => arr.map(mapper)
const arrayize = x => (!x ? [] : Array.isArray(x) ? x : [x])

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
