const asyncPipe = require('../asyncPipe')
/**
 * @param  {function} fetcher function (e.g node-fetch), need to return a promise
 * @param  {*} fetchArgs Arguments provided to the fetcher function
 * @param  {...function} fns Functions to pipe against the result of the fetcher call
 * @returns  {(fetchArgs: *) => (fns: ...function) => Promise} Return a promise
 */

const pipetch = fetcher => (...fetchArgs) => (...fns) =>
  asyncPipe(...fns)(fetcher(...fetchArgs))

module.exports = pipetch
