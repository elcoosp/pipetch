const unjsonize = require('./index.js')

test('should return an object from a json', () => {
  expect(unjsonize(JSON.stringify({ a: 1 }))).toEqual({ a: 1 })
})

test('should execute json method on the object if it have one', () => {
  const fakeObjWithJsonMethod = {
    json() {
      return 'I am unjsonized'
    }
  }

  expect(unjsonize(fakeObjWithJsonMethod)).toEqual('I am unjsonized')
})
