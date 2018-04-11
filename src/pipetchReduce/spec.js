const pipetchReduce = require('./index.js')

test('should call the fetcher promise-aware function with mockData, and map over each item to execute corresponding mapKeys tuples', () => {
  const fetcher = d => Promise.resolve(d)
  const mockData = JSON.stringify([
    { id: 2, name: 'bar' },
    { id: 3, name: 'plop' }
  ])

  const output = pipetchReduce(fetcher)({
    id: x => x * 2,
    name: x => 'new name'
  })(mockData)

  output.then(data => {
    expect(data).toEqual([
      { id: 4, name: 'new name' },
      { id: 6, name: 'new name' }
    ])
  })
})
