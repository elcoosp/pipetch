/**
 * If a json method is abailable on the object use it otherwise try with JSON.parse
 * @param  {*} x The value to unjsonize
 * @returns  {Object}
 */

const unjsonize = x => (x.json ? x.json() : JSON.parse(x))

module.exports = unjsonize
