import React, { useState } from 'react';
import data from './Categoriesapi.js' 
import { Link } from 'react-router-dom';
import GenreQuestions from './GenreQuestions.js'







function Home() {
    const [genres] = useState(data)
    const [selectedGenre,setSelectedGenre] = useState(null)
console.log(genres)
    return (
    <div>
    
    <div>
    <ul className="genre-container">
    {genres.map((genre) => {
    return <h2 className="genre-item">
        <Link to={`/GenreQuestions/`} onClick={() =>setSelectedGenre(genre)} className="genre-links">{genre.genre}</Link>
        </h2>
})}

    </ul>
    </div>
    </div>
    )

}


export default Home