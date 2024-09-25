import React from 'react'
import './Profile.css'

function Profile(props) {
  return (
    <div classname="Profile">
        <span>{props.firstname}</span>
        <span>{props.lastname}</span>

    </div>
  )
}

export default Profile