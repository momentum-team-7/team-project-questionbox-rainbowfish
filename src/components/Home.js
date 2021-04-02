import React, { useState } from 'react';
import data from './Categoriesapi.js' 







function Home() {
    const [genres] = useState(data)
console.log(genres)
    return (
    <div>
    <h1>Home Page</h1>
    <ul>
    {genres.map((genre) => {
        console.log(genre)
       return <h1>{genre.genre}</h1>
     
})}
    </ul>
    </div>
    )
}


export default Home