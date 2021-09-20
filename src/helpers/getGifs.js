export const getGifs = async (category, setImages) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=c3Q81qd4KHNujZDY2iIOetMK47Z9qY3g`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    return data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });
}