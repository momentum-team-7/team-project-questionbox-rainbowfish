import axios from 'axios'
import {useState} from 'react'


const QuestionField = ({askQuestion, setAskQuestion}) => {
    // const [text, setText] = useState('')
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [tags, setTags] = useState("")
    // const handleChange = (event) => {
    //   setText(event.target.value)
    // }

    const handleSubmit = (event) => {
      let config = {
        auth: {
          "username":"Tatiana", "password":"password"
        },
        }
      event.preventDefault()
      axios.post(
        'https://questionbox-torpedo-shark.herokuapp.com/questions/',
        {
          title: title,
          body: body,
          tags: tags
        },
        config,
      ).then(res => {
        console.log('res ', res.data)
      }).catch(err => {
        console.log('err ', err)
      })
      
    }

    return (
      <>
        <form onSubmit={(event) => handleSubmit(event)}>
        <input type="text" onChange={(event) => setTitle(event.target.value)} placeholder="What's on your mind?" style={askQuestion ? {} : { display: 'none' }}/>
        <textarea type="text" onChange={(event) => setBody(event.target.value)} placeholder="Add some detail.."  style={askQuestion ? {} : { display: 'none' }}/>
        <input type="text" onChange={(event) => setTags(event.target.value)} placeholder="tags tags tags" style={askQuestion ? {} : { display: 'none' }}/>

        <button onClick={() =>setAskQuestion(!askQuestion)} style={askQuestion ? {} : { display: 'none' }} type="submit">Post</button>
        </form>
      </>
    )
}

export default QuestionField