import React from 'react'

export default function Member(props){
    const { details } = props

    return(
        <div className='cardContainer'>
        <div className='memberContainer'>
            <h2>{details.name}</h2>
            <h4>{details.email}</h4>
            <h3>{details.role}</h3>
        </div>
    </div>
    )
}