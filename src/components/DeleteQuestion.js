import axios from 'axios'
import {useState} from 'react'


const DeleteQuestion = ({ token, question}) => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [tags, setTags] = useState('')

    

    const handleSubmit = (event) => {
      
      event.preventDefault()
      axios.delete(
        `https://questionbox-torpedo-shark.herokuapp.com/questions/${question.id}/`,

        {
          headers: { Authorization: `Token ${token}`},
       
      },
     
      ).then(res => {
        console.log('res ', res.data)
      }).catch(err => {
        console.log('err ', err)
      })
      
    }

    return (
    <>
        <button onClick={(event) => handleSubmit(event)} type="submit" className="delete-btn">Delete</button>
    
    </>
    )
}

export default DeleteQuestion