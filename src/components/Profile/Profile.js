import React from 'react'
import './Profile.css'
import ProfileInfo from '../ProfileInfo/ProfileInfo'
import Category from '../Category/Category'

let Profile = () => {
    return (
        <div className="Profile">
            <ProfileInfo name="Adisa Malik" website="http://adisamalik.com" email="adisamalik@gmail.com"/>
            <div className="profile-details">
                <Category title="experience" />
                <Category title="education" />
            </div>
        </div>
    )
}

export default Profile