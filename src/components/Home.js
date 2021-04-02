import React, { useState } from 'react';
import data from './Categoriesapi.js' 
import { Link } from 'react-router-dom';
import GenreQuestions from './GenreQuestions.js'







function Home() {
    const [genres] = useState(data)
    const [selectedGenre,setSelectedGenre] = useState('null')
console.log(genres)
    return (
    <div>
    <h1>Home Page</h1>
    <ul>
    {genres.map((genre) => {
        console.log(genre)
       return <h2>
           <Link to={`/question/${genre.id}`} onClick={() =>setSelectedGenre(genre)}>{genre.genre}</Link>
           
           
           </h2>
     
})}

    </ul>
    </div>
    )
    console.log(selectedGenre)
}


export default Home