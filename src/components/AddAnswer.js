import {useState} from 'react'


const InputField = ({reply, setReply}) => {
    const [text, setText] = useState('')
    const handleChange = (event) => {
      setText(event.target.value)
    }
    return (
      <>
        <textarea type="text" value={text} onChange={handleChange} placeholder="Type your response here..."  style={reply ? {} : { display: 'none' }}/>
        <button onClick={() =>setReply(!reply)} style={reply ? {} : { display: 'none' }}>Submit!</button>
      </>
    )
}

export default InputField