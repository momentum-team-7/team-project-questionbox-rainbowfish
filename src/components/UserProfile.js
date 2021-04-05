import { useState } from 'react'
import axios from 'axios'

    
]

function UserProfile() {
    
    const [user, setUser] = useState([])
    
    useEffect(() => {
    axios.get(`https://questionbox-torpedo-shark.herokuapp.com/questions/`).then((response) => {
        
        setUser(response.data)
        console.log(user)
        
    })}, [])
    
    return (
        <div>
            <div ClassName='user-profile'>
                <h1>{user.author.username}</h1>
                <h2>LOCATION</h2>
                <h2>JOIN YEAR</h2>
                <h2>BIO</h2>
            </div>
        </div>
    )
}




export default UserProfile