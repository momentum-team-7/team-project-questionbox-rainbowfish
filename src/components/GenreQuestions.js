import { useState } from 'react'
import dataQuestions from './api.js'

function GenreQuestions() {
    const [questions] = useState(dataQuestions)
        console.log(questions)
    return (
        <div>
            {questions.map((question) => {
            return <div>
                <h2>{question.title}</h2>
                <h3>{question.body}</h3>
                </div>
        })}
        </div>
 )
}

export default GenreQuestions