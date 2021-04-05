import {useState} from 'react'


const QuestionField = ({askQuestion, setAskQuestion}) => {
    const [text, setText] = useState('')
    const handleChange = (event) => {
      setText(event.target.value)
    }
    return (
      <>
        <textarea type="text" value={text} onChange={handleChange} placeholder="..."  style={askQuestion ? {} : { display: 'none' }}/>
        <button onClick={() =>setAskQuestion(!askQuestion)} style={askQuestion ? {} : { display: 'none' }}>Submit!</button>
      </>
    )
}

export default QuestionField