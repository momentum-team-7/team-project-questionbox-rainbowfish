import axios from 'axios'
import {useState} from 'react'


const QuestionField = ({askQuestion, setAskQuestion, token, newQuestion }) => {
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [tags, setTags] = useState("")
    const [musicGenre, setMusicGenre] = useState("")

    let returnQuestion = (data) => {
      let question = data
      newQuestion(question)
    }
    const handleSubmit = (event) => {
      event.preventDefault()
      axios.post(
        'https://questionbox-torpedo-shark.herokuapp.com/questions/',
        {
          title: title,
          body: body,
          tags: tags,
          musicgenre: musicGenre
          
        },
        {
          headers: { Authorization: `Token ${token}`},
      }
      ).then(res => {
        console.log('res ', res.data)
        returnQuestion(res.data)
        // newQuestion(res.data)
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
        <select onChange={(event) => setMusicGenre(event.target.value)} style={askQuestion ? {} : { display: 'none' }} placeholder="Select Genre">
        <option value="" disabled selected className='genre-selection'>Select Genre</option>
          <option value="Country">Country</option>
          <option value="Folk">Folk</option>
          <option value="Electronic">Electronic</option>
          <option value="Rock">Rock</option>
          <option value="R&B">R&B</option>
          <option value="Pop">Pop</option>
          <option value="Christmas">Christmas</option>
          <option value="Booty Bass">Booty Bass</option>
          <option value="Indie">Indie</option>
          <option value="Hip-Hop/Rap">Hip-Hop/Rap</option>
          <option value="Alternative">Alternative</option>
        </select>
        
        <button onClick={() =>setAskQuestion(!askQuestion)} style={askQuestion ? {} : { display: 'none' }} type="submit">Post</button>
        </form>
      </>
    )
}

export default QuestionField