import fetchJSONFromURL from './fetchJSONFromURL'

describe('fetchJSONFromURL', () => {
  it('fetches JSON from a URL', async () => {
    // Mock the fetch function to return a fake response
    const mockResponse = { data: { name: 'John' } }
    const mockFetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockResponse),
      }),
    )
    // @ts-ignore
    global.fetch = mockFetch

    // Call the fetchJSONFromURL function with a fake URL
    const result = await fetchJSONFromURL('https://example.com/api/data')

    // Expect that the fetch function was called with the correct URL
    expect(mockFetch).toHaveBeenCalledWith('https://example.com/api/data')

    // Expect that the result is equal to the mock response
    expect(result).toEqual(mockResponse)
  })
})
