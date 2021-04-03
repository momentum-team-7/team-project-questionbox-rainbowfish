import { useState } from 'react'
import dataQuestions from './api.js'
import { Link } from 'react-router-dom';

function GenreQuestions() {
    const [questions] = useState(dataQuestions)
    const [selectedQuestion, setSelectedQuestion] = useState(null)
        console.log(questions)
    return (
        <div>
            {questions.map((question) => {
            return <div className='answer-box'>
                <Link to={`/Answers/`} onClick={() =>setSelectedQuestion(question)} className="questions">
                <h2>{question.title}</h2>

                <h3>{question.body}</h3></Link>


                </div>
                
        })}
        </div>
 )
}

export default GenreQuestions