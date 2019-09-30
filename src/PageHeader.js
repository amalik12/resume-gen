import React from 'react'
import HeaderButton from './HeaderButton'
import './PageHeader.css'

let PageHeader = ({title}) => {
    return (
        <div className="PageHeader">
            <span className="page-title">{title}</span>
            <HeaderButton name="Add Content"/>
        </div>
    )
}

export default PageHeader