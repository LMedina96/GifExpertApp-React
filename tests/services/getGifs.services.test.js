import {getGifs} from '../../src/services/getGifs.services'

describe('getGifs() API Tests', () => {
  test('should return the Gifs elements', async() => {
    const typeSearch = 'gifs'
    const gifs = await getGifs('Dragon Ball Z', typeSearch)

    expect(gifs.length).toBeGreaterThan(0);

    expect(gifs[0]).toEqual({
        id: expect.any(String),
        title: expect.any(String),
        url: expect.any(String),
    })
  })
  
})
