const pipetch = require('./index.js')

test('should call the fetcher promise-aware function with mockData, and apply the provided functions', () => {
  const fetcher = d => Promise.resolve(d)
  const mockData = [{ id: 2, name: 'bar' }, { id: 3, name: 'plop' }]

  pipetch(fetcher)(mockData)(
    list => list.map(item => ({ ...item, id: item.id * 2 })),
    list => list.map(item => ({ ...item, id: item.id * 3 }))
  ).then(data =>
    expect(data).toEqual([{ id: 12, name: 'bar' }, { id: 18, name: 'plop' }])
  )
})
