const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=cvt4JhB5xZoJWupAthMWcLn1ltfGHXZM&q=${encodeURI(category)}`
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(el => {
        return {
            id: el.id,
            title: el.title,
            url: el.images?.downsized_medium.url
        }
    })

    return gifs;
};

export default getGifs;