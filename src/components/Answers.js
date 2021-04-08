import dataAnswers from './AnswerApi.js'
import { useState, useEffect } from 'react'
import InputField from './AddAnswer.js'
import LikeBtn from './LikeBtn.js'
import axios from 'axios'
import lodash from 'lodash'

import { Link } from 'react-router-dom'

function QuestionAnswers( props ) {
    const [answers, setAnswers] = useState({events: null})
    const [reply, setReply] = useState(false)
    const {selectedQuestion} = props.location.state
    const [selectedUser, setSelectedUser] = useState(null)
  
    useEffect(() => {
        axios.get('https://questionbox-torpedo-shark.herokuapp.com/answers/').then((response) => {
            
            setAnswers({events: response.data})
            
            
        
        })}, [])

    let answerstoRender 
    if (!lodash.isEmpty(answers.events)) {
        answerstoRender = answers.events.map(answer => {
            
            console.log('answers', answers)
            console.log('answer', answer)
        return <div className='answer-box' >

            <div className="answer-content">
            <h2>{answer.body}</h2>
           <Link onClick={() =>setSelectedUser()} className="answer-author" to={{ pathname: `/UserProfile/`, state: {selectedUser: answer.author, userAnswer: answer.body } }}><h3>{answer.author}</h3></Link>
            
            <LikeBtn />
            
            </div>

            </div>
            
    
        })
        }

    return (
        <div>
            <div className="question-answer">
                <h1>{selectedQuestion.title}</h1>
                <h4>{selectedQuestion.author.username}</h4>
                


                <InputField reply={reply} setReply={setReply}/> 
                <button onClick={() =>setReply(!reply)} style={reply ? { display: 'none' } : {}}>Reply!</button>
            
            </div>

            {answerstoRender}
            
            {/* {answers.events.map((answer) => {
                console.log('answers', answers)
                console.log('answer', answer)
            return <div className='answer-box' >

                <div className="answer-content">
                <h2>{answer.body}</h2>
               <Link onClick={() =>setSelectedUser()} className="answer-author" to={{ pathname: `/UserProfile/`, state: {selectedUser: answer.author, userAnswer: answer.body } }}><h3>{answer.author}</h3></Link>
                
                <LikeBtn />
                
                </div>

                </div>
                
        })} */}
        </div>
 )
}

export default QuestionAnswers