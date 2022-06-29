import React from "react"

function GifList({ gifs }) {
    return (
        <ul>
            {gifs.map(gif => {
                return (
                    <li key={gif.images.original.url} >
                        <img alt={gif.url} src={gif.images.original.url}></img>
                    </li>
                )
            })}
        </ul>
    )
}
export default GifList;