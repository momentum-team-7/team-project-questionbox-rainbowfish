import React from 'react'
import axios from 'axios'
import GenreQuestions from './GenreQuestions'
    


function UserProfile({ location }) {
    console.log(location)
    const selectedUser = location.state.selectedUser
    return (
        <div>
                return
                 <div className='user-profile'>
                    <h1>{selectedUser.username}</h1>
                    <div className='profile-items'>
                        <h2>LOCATION</h2>
                        <h2>JOIN YEAR</h2>
                        <h2>BIO</h2>
                    </div>
                </div>
            
           
        </div>
    )
}




export default UserProfile