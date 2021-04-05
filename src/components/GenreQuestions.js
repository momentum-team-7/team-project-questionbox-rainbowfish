import { useState, useEffect } from 'react'
// import dataQuestions from './api.js'
import axios from 'axios';
import QuestionField from './AddQuestion.js'
import { Link } from 'react-router-dom';

function GenreQuestions( ) {
    const [questions, setQuestions] = useState([])
    const [selectedQuestion, setSelectedQuestion] = useState(null)
    const [askQuestion, setAskQuestion] = useState(false)
    const [user, setUser] = useState([])
    const [selectedUser, setSelectedUser] = useState([])
    useEffect(() => {
    axios.get(`https://questionbox-torpedo-shark.herokuapp.com/questions/`).then((response) => {
        
        setQuestions(response.data)
        console.log(questions)
        
    })}, [])


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
                <Link onClick={() =>setSelectedUser(user)} className="question-author" to={{ pathname: `UserProfile`, state:{selectedUser: user} }}><h4>{question.author.username}</h4></Link>


                </div>
                
        })}
        </div>
 )
}

export default GenreQuestions