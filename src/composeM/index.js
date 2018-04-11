/**
 * @param {string} chainMethod - Method which will be executed against the accumulator (e.g 'then', 'next')
 * @returns  {(fns: ...functions) => *} Function taking functions to execute agaisnt the chainMethod of the accumulator
 */
const composeM = chainMethod => (...fns) => initAcc =>
  fns.reduce((acc, f) => acc[chainMethod](f), initAcc)

module.exports = composeM
