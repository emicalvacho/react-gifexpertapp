import React, { useState } from 'react'
import AddCategory from "./components/AddCategory";
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Crash Bandicoot']);

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />

            <ol>
                {
                    categories.map((category, i) => 
                        <GifGrid category={category} key={category}></GifGrid>
                        // return <li key={ category }>{ category }</li>
                    )
                }
            </ol>
        </>
    )
}

export default GifExpertApp
