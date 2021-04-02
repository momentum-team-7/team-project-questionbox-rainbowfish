import { useState } from 'react'
import dataQuestions from './api.js'

function GenreQuestions() {
    const [questions] = useState(dataQuestions)

    return (
        <div>
        {questions.map((question) => {
            return 
                <h2>{question.title}</h2>
                // <h3>{question.question}</h3>
        })}
        </div>
    )
}

export default GenreQuestions