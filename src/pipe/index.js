/**
 * @param  {...function} fns - Functions to execute against initAcc
 * @returns  {(initAcc: *) => *} Function taking the initial value provided to the accumulator
 */
const pipe = (...fns) => initAcc => fns.reduce((acc, f) => f(acc), initAcc)
module.exports = pipe
