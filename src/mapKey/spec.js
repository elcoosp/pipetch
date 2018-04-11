const mapKey = require('./index')
test('should return a new object with the provided key mapped with the provided function', () => {
  expect(mapKey('num')(x => x + 2)({ num: 2, thing: 'foo' })).toEqual({
    num: 4,
    thing: 'foo'
  })
})
