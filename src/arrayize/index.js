const isArray = x => (Array.isArray ? Array.isArray(x) : v instanceof Array)

/**
 * If x is undefined or null return an empty array, if it's already an array return it otherwise wrap it in an array
 * @param  {function} x The value to trnasform in an array or return
 * @returns  {Array} Return a promise
 */

const arrayize = x => (!x ? [] : isArray(x) ? x : [x])

module.exports = arrayize
