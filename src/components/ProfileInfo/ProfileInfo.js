import React from 'react'
import './ProfileInfo.css'

let ProfileInfo = ({name, website, email, location, github}) => {
    return (
        <div className="ProfileInfo">
            <h2 className="profile-name">{name}</h2>
            <div className="profile-links">
                <div className={"profile-item" + (website ? "" : " disabled")}><i class={"profile-item-icon fas fa-globe-americas"}/>{website || "Personal site"}</div>
                <div className={"profile-item" + (email ? "" : " disabled")}><i class="profile-item-icon fas fa-envelope"/>{email || "Email address"}</div>
                <div className={"profile-item" + (location ? "" : " disabled")}><i class="profile-item-icon fas fa-map-marker-alt"/>{location || "Current location"}</div>
                <div className={"profile-item" + (github ? "" : " disabled")}><i class="profile-item-icon fab fa-github"/>{github || "Github"}</div>
            </div>
        </div>
    )
}

export default ProfileInfo