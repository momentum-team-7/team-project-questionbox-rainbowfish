import axios from 'axios'
import {useState} from 'react'


const DeleteQuestion = ({ token, selectedQuestion }) => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [tags, setTags] = useState('')

    

    const handleSubmit = (event) => {
      
    //   event.preventDefault()
      axios.post(
        `https://questionbox-torpedo-shark.herokuapp.com/questions/${selectedQuestion.id}`,
        {
          title: title,
          body: body,
          tags: tags
        },
        {
          headers: { Authorization: `Token ${token}`},
      }
      ).then(res => {
        console.log('res ', res.data)
      }).catch(err => {
        console.log('err ', err)
      })
      
    }

    return (
    <>
        <button onClick={() => handleSubmit()} type="submit" className="delete-btn">Delete</button>
    
    </>
    )
}

export default DeleteQuestion