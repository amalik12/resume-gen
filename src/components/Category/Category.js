import React from 'react'
import './Category.css'
import Position from '../Position/Position';

let Category = ({ title }) => {
    return (
        <div className="Category">
            <div className="category-title">{title}</div>
            <Position title="Software Engineer" company="Bloomberg"
            startDate="Sept 2018" endDate="Present" tags={['c++', 'python']}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel efficitur lectus. Nam ut tempus nisi, eu posuere justo. In porttitor euismod dolor, gravida mollis ex gravida vitae. Quisque urna ante, dignissim sed aliquet ut, laoreet ac enim."/>
        </div>
    )
}

export default Category