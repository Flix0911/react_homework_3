//This is the GifDisplay component

function GifDisplay({gif}){
    //confirm gif is truthy 
    if (!gif) return null

    //access URL correctly from structure
    const gifUrl = gif.data.images.original.url

    return<div>
        <img src={gifUrl} alt="GIF"/>
    </div>
    }

//export out
export default GifDisplay