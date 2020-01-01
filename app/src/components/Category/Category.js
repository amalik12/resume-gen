import React, { useEffect } from 'react'
import './Category.css'
import Position from '../Position/Position';

let Category = ({ catTitle, positions, setPositions }) => {
    
    useEffect(() => {
        fetch('/api/v1/positions')
        .then(result => result.json())
        .then(json => setPositions(json))
        .catch(err => console.error(err))
    }, [setPositions])
    return (
        <div className="Category">
            <div className="category-title">{catTitle}</div>
            {positions.sort((a, b) => {
                if (a.startDate === b.startDate) {
                    return 0
                } else if (a.startDate < b.startDate) {
                    return 1
                } else {
                    return -1
                }
            }).map((item, index) => {
                let {startDate, endDate, ...newProps} = item;
                let start = new Date(item.startDate);
                let end = null;
                if (item.endDate !== null) {
                    end = new Date(item.endDate);
                }
                return <Position key={item.id} startDate={start} endDate={end} updateData={setPositions} {...newProps} type={catTitle}/>
            })}
        </div>
    )
}

export default Category