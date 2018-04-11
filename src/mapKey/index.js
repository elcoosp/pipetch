/**
 *  Map the key with the provided function against the object
 * @param  {string} k - The key to map
 * @returns  {(f: function) => (o: Object) => Object} Function taking a function to map the key of the provided object (o)
 */
const mapKey = k => f => o => ({
  ...o,
  [k]: f(o[k])
})

module.exports = mapKey
