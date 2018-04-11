/**
 * @param  {...function} fns - Functions to execute against initAcc
 * @param  {Object|string|number|boolean} initAcc - Initial value provided to the accumulator
 * @returns  {Object|string|number|boolean} - The accumulated value
 */
const pipe = (...fns) => initAcc => fns.reduce((acc, f) => f(acc), initAcc)
module.exports = pipe