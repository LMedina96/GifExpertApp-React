export const getGifs = async(category) => {
    const api_key = '5EROASGbL1X08au0uzvVGDG0PdbPzSTv'
    const limit = '12'
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${category}&limit=${limit}`

    const resp = await fetch(url)
    const {data} = await resp.json()

    const gifs = data.map((img) => ({
        id: img.id,
        title: img.title,
        url: img.images.original.url
    }))


    return gifs
}