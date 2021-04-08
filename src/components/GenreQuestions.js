import { useState, useEffect, setState } from 'react'
// import dataQuestions from './api.js'
import axios from 'axios';
import QuestionField from './AddQuestion.js'
import DeleteQuestion from './DeleteQuestion.js'
import _ from 'lodash'
import { Link } from 'react-router-dom';


function GenreQuestions({ selectedGenre, token, questions } ) {

    const [selectedQuestion, setSelectedQuestion] = useState(null)
    const [askQuestion, setAskQuestion] = useState(false)
    const [selectedUser, setSelectedUser] = useState(null)
    const [filteredQuestions, setFilteredQuestions] = useState([])

    useEffect (() => {
        setFilteredQuestions(questions.filter((question) => selectedGenre === question.musicgenre))
    }, [])    
    
    let showNewQuestion = (newQ) => {
        questions.push(newQ)
        setFilteredQuestions([...questions])
    }

    return (
        <>
        {filteredQuestions && filteredQuestions.length === 0 && 
        <div className='empty-message'><h1>Sorry, No Questions Babe</h1></div>
        }
        <div>
            <div id="scroller">
            {filteredQuestions.map((question, idx) => {
            return <div key={`${question}-${idx}`} className='answer-box'>
                <Link onClick={() =>setSelectedQuestion(question)} className="questions" to={{ pathname:`/Answers/`, state: {selectedQuestion: question} }} >
                <h4 className="genre-name">Genre: {question.musicgenre}</h4>
                <h2>{question.title}</h2>
                <h3>{question.body}</h3></Link>
                
                
                

                <Link onClick={() =>setSelectedUser()} className="question-author" to={{ pathname: `/UserProfile/`, state: {selectedUser: question.author, userQuestion: question.body, question: question } }}> <h5 className="username">{question.author.username}</h5></Link>

                <DeleteQuestion selectedQuestion={selectedQuestion} setSelectedQuestion={setSelectedQuestion} question={question} token={token}/>
                </div> 
        })}
        </div>
        <div className="question-answer">
            <QuestionField askQuestion={askQuestion} setAskQuestion={setAskQuestion} token={token} newQuestion={showNewQuestion}/>
            <button onClick={() =>setAskQuestion(!askQuestion)} style={askQuestion ? { display: 'none' } : {}}>Have something to say? Add it here. </button>
            </div>
        </div>
        </>
)
}

export default GenreQuestions