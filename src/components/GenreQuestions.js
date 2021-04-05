import { useState } from 'react'
import dataQuestions from './api.js'
import QuestionField from './AddQuestion.js'
import { Link } from 'react-router-dom';

function GenreQuestions() {
    const [questions] = useState(dataQuestions)
    const [selectedQuestion, setSelectedQuestion] = useState(null)
    const [askQuestion, setAskQuestion] = useState(false)
        // console.log(questions)
    return (
        <div>
            <div className="question-answer">
            <QuestionField askQuestion={askQuestion} setAskQuestion={setAskQuestion}/>
            <button onClick={() =>setAskQuestion(!askQuestion)} style={askQuestion ? { display: 'none' } : {}}>Have something to say? Add it here. </button>
            </div>

            {questions.map((question) => {
            return <div className='answer-box'>
                <Link onClick={() =>setSelectedQuestion(question)} className="questions" to={{ pathname:`/Answers/`, state: {selectedQuestion: question} }} >
                <h2>{question.title}</h2>

                <h3>{question.body}</h3></Link>


                </div>
                
        })}
        </div>
 )
}

export default GenreQuestions