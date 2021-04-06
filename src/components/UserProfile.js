import React from 'react'
import axios from 'axios'
import GenreQuestions from './GenreQuestions'
    


function UserProfile(props) {
    
    const {selectedUser, userQuestion} = props.location.state
    // const {userQuestion} = props.location.state
    return (
        <div>
                
                 <div className='user-profile'>
                    <h1>{selectedUser.username}</h1>
                    <div className='profile-items'>
                        <h2>LOCATION</h2>
                        <h2>JOIN YEAR</h2>
                        <h2>BIO</h2>
                         
                    </div>
                    <div className='user-questions'>
                        <h2> {selectedUser.username}'s Question History</h2>
                        <h4>{userQuestion}</h4>
                    </div>
                </div>
            
              
           
        </div>
    )
}




export default UserProfile