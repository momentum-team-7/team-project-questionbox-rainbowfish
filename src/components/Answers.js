import dataAnswers from './AnswerApi.js'
import { useState, useEffect } from 'react'
import InputField from './AddAnswer.js'
import LikeBtn from './LikeBtn.js'
import axios from 'axios'
import lodash from 'lodash'

import { Link } from 'react-router-dom'

function QuestionAnswers( props ) {
    const [answers, setAnswers] = useState({})
    const [reply, setReply] = useState(false)
    const {selectedQuestion} = props.location.state
    const [selectedUser, setSelectedUser] = useState(null)

    useEffect(() => {
        axios.get('https://questionbox-torpedo-shark.herokuapp.com/answers/').then((response) => {
            setAnswers(response.data)
        })}, [])

        let answerstoRender 
        if (!lodash.isEmpty(answers)) {
            answerstoRender = Object.keys(answers).map((key) => {
            return <div className='answer-box' >
                <div className="answer-content">
                <h2>{answers[key].body}</h2>
                <Link onClick={() =>setSelectedUser()} 
                    className="answer-author" 
                    to={{ pathname: `/UserProfile/`, state: {selectedUser: answers[key].author, userAnswer: answers[key].body } }}>
                        <h3>{answers[key].author.username}</h3>
                </Link>
                {/* <LikeBtn /> */}
                </div>
                </div>
            })}

    return (
        <div>
            <div className="question-answer">
                <h1>{selectedQuestion.title}</h1>
                <h2>{selectedQuestion.body}</h2>
                <h4>{selectedQuestion.author.username}</h4>
                
                <InputField reply={reply} setReply={setReply}/> 
                <button onClick={() =>setReply(!reply)} style={reply ? { display: 'none' } : {}}>Reply!</button>
            
            </div>
            {answerstoRender}
            
        </div>
)}

export default QuestionAnswers