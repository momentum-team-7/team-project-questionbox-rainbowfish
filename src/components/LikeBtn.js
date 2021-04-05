import { useState, useEffect } from 'react'
// import axios from 'axios';

// this is going to have to be a post request to save likes /dislikes 

function LikeBtn() {
    const [likes, setLikes] = useState(null)
    const [dislikes, setDislikes] = useState(null)

    return (
        <div className="like-box">
        <button onClick={() =>setLikes(likes + 1)} className="like-btn">&#8593;</button>
        <div className="like-count">{likes}</div>
        <button onClick={() =>setDislikes(dislikes + 1)} className="dislike-btn">&#8595;</button>
        <div className="like-count">{dislikes}</div>

        </div>
    )
}

export default LikeBtn