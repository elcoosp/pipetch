const makeKeysMapper = require('./index')
const mapKey = require('../mapKey')
test('should return an array of mapKey functions ready to call with an object', () => {
  const mockList = [
    {
      id: 2,
      title: 'foo'
    },
    {
      id: 3,
      title: 'bar'
    }
  ]

  const keysMapper = makeKeysMapper({
    id: x => x + 1,
    title: x => 'plop'
  })

  const output = mockList.map(item =>
    keysMapper.reduce((acc, transform) => transform(acc), item)
  )

  expect(output).toEqual([
    {
      id: 3,
      title: 'plop'
    },
    {
      id: 4,
      title: 'plop'
    }
  ])
})
