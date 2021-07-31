import React from 'react'
import './details.css'
const Details = ( {group}) => {
    return (
        <div>
            {group.map(single => {
                const {id, name, age, image} = single
                return (
                   <div className="card" key={id}>
                       <img src={image} alt={name} />
                       <div>
                           <h3>{name}</h3>
                            <h4>{age}</h4>
                            <hr />
                       </div>
                       
                   </div>
                )
            })}
            
        </div>
    )
}

export default Details
