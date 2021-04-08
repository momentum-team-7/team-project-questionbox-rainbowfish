import React, { useState, useEffect } from 'react';
import GENRES from './Categoriesapi.js' 
import { Link } from 'react-router-dom';
import axios from 'axios';
import GenreQuestions from './GenreQuestions.js'







function Home({ setSelectedGenre }) {
    const [genres, setGenres] = useState('')
    
    
    // useEffect(() => {
    // axios.get(`https://questionbox-torpedo-shark.herokuapp.com/questions/`).then((response) => {
        
    //     setGenres(response.data)
        
    // })}, [])
    // console.log(genres)

   
    return (
    <div>
    
    <div  id="scroller2">
    <ul className="genre-container">
    {GENRES.map((genre) => {
    return <h2 key={genre} className="genre-item">
        <Link to={{ pathname:`/GenreQuestions/`, state:{selectedGenre: genre} }} onClick={() =>setSelectedGenre(genre)} className="genre-links">{genre}</Link>
        </h2>
})}

    </ul>
    </div>
       
    </div>

    )

}


export default Home