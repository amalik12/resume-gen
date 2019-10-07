import React from 'react'
import './ProfileInfo.css'
import EditButton from '../EditButton'

let ProfileInfo = ({name, website, email, location, github}) => {
    return (
        <div className="ProfileInfo">
            <div className="profile-name-container">
                <h2 className="profile-name">{name}</h2>
                <EditButton className="profile-edit-button" />
            </div>
            <div className="profile-links">
                <div className={"profile-item" + (website ? "" : " disabled")}><i className={"profile-item-icon fas fa-globe-americas"}/>{website || "Personal site"}</div>
                <div className={"profile-item" + (email ? "" : " disabled")}><i className="profile-item-icon fas fa-envelope"/>{email || "Email address"}</div>
                <div className={"profile-item" + (location ? "" : " disabled")}><i className="profile-item-icon fas fa-map-marker-alt"/>{location || "Current location"}</div>
                <div className={"profile-item" + (github ? "" : " disabled")}><i className="profile-item-icon fab fa-github"/>{github || "Github"}</div>
            </div>
        </div>
    )
}

export default ProfileInfo