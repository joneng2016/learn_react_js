import React from 'react'

function Person({person}) {
    return (
        <h2> 
            I am {person.name}. I am {person.age} years ago. I know {person.skil}
        </h2>
    )
}

export default Person
