import React from 'react'
import '../Styles/Profile.css'

function Profile() {
  return (
    <div>
      <h1>Profile</h1>
        <div className='name'>
          <p>Name:SomeOne</p>
          <p>E-mail:Someone@gmail.com</p>  
        </div>
        <div className='bio'>
          <h1>Bio</h1>
          <p>Software Developer</p>
          <p>Specialised on MERN Full stack</p>
        </div>
        
          <button className='editBtn'>Edit Profile</button>
        
    </div>
  )
}

export default Profile
