import dataAnswers from './AnswerApi.js'
import { useState } from 'react'


function QuestionAnswers() {
    const [answers] = useState(dataAnswers)
   
    return (
        <div>
            {answers.map((answer) => {
            return <div className='answer-box'>

                <div className="answer-content">
                <h2>{answer.body}</h2>

                <h3>{answer.author}</h3>
                </div>

                </div>
                
        })}
        </div>
 )
}

export default QuestionAnswers