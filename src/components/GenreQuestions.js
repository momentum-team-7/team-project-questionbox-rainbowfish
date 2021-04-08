import { useState, useEffect } from 'react'
// import dataQuestions from './api.js'
import axios from 'axios';
import QuestionField from './AddQuestion.js'
import DeleteQuestion from './DeleteQuestion.js'
import { Link } from 'react-router-dom';


function GenreQuestions({ selectedGenre, token } ) {

    const [questions, setQuestions] = useState([])
    const [selectedQuestion, setSelectedQuestion] = useState(null)
    const [askQuestion, setAskQuestion] = useState(false)
    const [selectedUser, setSelectedUser] = useState(null)
    const [filteredQuestions, setFilteredQuestions] = useState([])
        // console.log(selectedGenre)
    useEffect(() => {
    axios.get(`https://questionbox-torpedo-shark.herokuapp.com/questions/`).then((response) => {
        
        setQuestions(response.data)
        // console.log('rspdatamg', response.data.map(genre => genre.musicgenre))
            const musicGenre = response.data.map(genre => genre.musicgenre)
            // const ques = response.data.filter(question => selectedGenre === response.data.map(genre => genre.musicgenre))
                if (selectedGenre === musicGenre) {
                setFilteredQuestions(questions)
               }
    })}, [])
    // console.log('filteredQuestions', filteredQuestions)

    // function filterQuestions() {
       
    // } 
    // filterQuestions()

    return (
        <div>
            <div className="question-answer">
            <QuestionField askQuestion={askQuestion} setAskQuestion={setAskQuestion} token={token} />
            <button onClick={() =>setAskQuestion(!askQuestion)} style={askQuestion ? { display: 'none' } : {}}>Have something to say? Add it here. </button>
            </div>
            
            {questions.map((question, idx) => {
            return <div key={`${question}-${idx}`} className='answer-box'>
                <Link onClick={() =>setSelectedQuestion(question)} className="questions" to={{ pathname:`/Answers/`, state: {selectedQuestion: question} }} >
                <h2>{question.title}</h2>

                <h3>{question.body}</h3></Link>
                
                <h4>{question.musicgenre}</h4>
                

                <Link onClick={() =>setSelectedUser()} className="question-author" to={{ pathname: `/UserProfile/`, state: {selectedUser: question.author, userQuestion: question.body } }}> <h4>{question.author.username}</h4></Link>

                <DeleteQuestion selectedQuestion={selectedQuestion} setSelectedQuestion={setSelectedQuestion} />
                </div>
                
        })}
        </div>
)
}

export default GenreQuestions