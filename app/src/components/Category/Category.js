import React, { useEffect } from 'react'
import './Category.css'
import Position from '../Position/Position';

let Category = ({ catTitle, items, setItems }) => {
    
    useEffect(() => {
        fetch('/api/v1/' + catTitle)
        .then(result => result.json())
        .then(json => setItems(json))
        .catch(err => console.error(err))
    }, [setItems, catTitle])

    return (
        <div className="Category">
            <div className="category-title">{catTitle === 'positions' ? 'experience' : catTitle}</div>
            {items.sort((a, b) => {
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
                if (item.endDate != null) {
                    end = new Date(item.endDate);
                }
                return <Position key={item.id} startDate={start} endDate={end} updateData={setItems} {...newProps} type={catTitle}/>
            })}
        </div>
    )
}

export default Category