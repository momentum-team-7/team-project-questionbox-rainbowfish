import { useEffect } from 'react'
import { getQuestions} from './api.js'

function GenreQuestions ({authToken}) {
    const [questions, setQuestions] = useState([])

    useEffect(() => {
        getQuestions(authToken).then(data => setQuestions(data.questions))
    })
}