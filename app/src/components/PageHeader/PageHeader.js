import React from 'react'
import HeaderButton from '../HeaderButton'
import './PageHeader.css'

let PageHeader = ({title, setPositions}) => {
    return (
        <div className="PageHeader">
            <span className="page-title">{title}</span>
            <HeaderButton name="Add Content" setPositions={setPositions}/>
        </div>
    )
}

export default PageHeader