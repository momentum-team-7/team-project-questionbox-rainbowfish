import React, { useState, useEffect } from 'react';
import data from './Categoriesapi.js' 
import { Link } from 'react-router-dom';
import axios from 'axios';
import GenreQuestions from './GenreQuestions.js'







function Home() {
    const [genres, setGenres] = useState([])
    const [selectedGenre,setSelectedGenre] = useState(null)
    useEffect(() => {
    axios.get(`https://questionbox-torpedo-shark.herokuapp.com/questions/`).then((response) => {
        
        setGenres(response.data)
        
    })}, [])
    console.log(genres)

    return (
    <div>
    
    <div>
    <ul className="genre-container">
    {genres.map((genre) => {
    return <h2 className="genre-item">
        <Link to={`/GenreQuestions/`} onClick={() =>setSelectedGenre(genre)} className="genre-links">{genre.musicgenre}</Link>
        </h2>
})}

    </ul>
    </div>
    </div>
    )

}


export default Home