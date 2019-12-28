import React from 'react'
import './Category.css'
import Position from '../Position/Position';

let Category = ({ title }) => {
    return (
        <div className="Category">
            <div className="category-title">{title}</div>
            <Position title="Software Engineer" company="Bloomberg"
            startDate={new Date(Date.UTC(2018, 9))} tags={['c++', 'python']} type={title}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel efficitur lectus. Nam ut tempus nisi, eu posuere justo. In porttitor euismod dolor, gravida mollis ex gravida vitae. Quisque urna ante, dignissim sed aliquet ut, laoreet ac enim."/>
        </div>
    )
}

export default Category