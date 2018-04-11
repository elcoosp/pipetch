const arrayize = require('./index.js')

test('should return an array', () => {
  expect(arrayize([])).toEqual([])
  expect(arrayize(4)).toEqual([4])
  expect(arrayize(undefined)).toEqual([])
  expect(arrayize(null)).toEqual([])
  expect(arrayize(['a', [5]])).toEqual(['a', [5]])
})
