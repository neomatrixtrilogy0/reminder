import React, {useState} from 'react'
import data from './data'
import Details from './Details'

const People = () => {
    const [group, setGroup] = useState(data)
    return (
       <div>
            <div className="header">
            <h2>{group.length} Birthdays Today</h2>
            <Details group={group} />
        </div>
        <button onClick={() => setGroup([])}>Delete All</button>
       </div>
    )
}

export default People
