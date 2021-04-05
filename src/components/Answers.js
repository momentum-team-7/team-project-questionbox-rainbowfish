import dataAnswers from './AnswerApi.js'
import { useState } from 'react'
import InputField from './AddAnswer.js'
import LikeBtn from './LikeBtn.js'


function QuestionAnswers( props ) {
    const [answers] = useState(dataAnswers)
    const [reply, setReply] = useState(false)
    const {selectedQuestion} = props.location.state
    
  
    console.log(selectedQuestion)

    return (
        <div>
            <div className="question-answer">
                <h1>{selectedQuestion.title}</h1>
                <h4>{selectedQuestion.author.username}</h4>
                


                <InputField reply={reply} setReply={setReply}/> 
                <button onClick={() =>setReply(!reply)} style={reply ? { display: 'none' } : {}}>Reply!</button>
            
            </div>
            
            {answers.map((answer) => {
            return <div className='answer-box'>

                <div className="answer-content">
                <h2>{answer.body}</h2>

                <h3>{answer.author}</h3>
                <LikeBtn />
                </div>

                </div>
                
        })}
        </div>
 )
}

export default QuestionAnswers