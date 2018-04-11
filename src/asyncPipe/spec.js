const asyncPipe = require('./index')
test('should return the accumulation of a chainable (e.g "then" here) call with the provided functions (arg 2) against the accumulator (arg 3)', () => {
  asyncPipe(x => x + 2, x => x * 3)(Promise.resolve(3)).then(output =>
    expect(output).toBe(15)
  )
})
