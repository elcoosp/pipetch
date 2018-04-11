const pipe = require('./index')
test('should execute consecutively provided functions against the initial accumulator', () => {
  expect(pipe(x => x + 2, x => x * 3)(3)).toBe(15)
})
