import React, { useState } from "react";

function GifSearch({ handleSubmit }) {
    const [search, setSearch] = useState();
    
    function handleSubmitSearch(e) {
        e.preventDefault();
        handleSubmit(search);
    }
    
    function handleChange(e) {
        setSearch(e.target.value);
    }
    
    return (
        <form onSubmit={handleSubmitSearch}>
            <label for="search">Enter a Search Term: </label>
            <input id="search" type="text" onChange={handleChange}></input>
            <button type="submit" value="Search">Find Gifs</button>
        </form>
    )
}
export default GifSearch;