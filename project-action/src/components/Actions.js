import React from 'react';

const Actions = ({description, completed, notes}) => {
    return (
        <div className='card'>
            <h3>{notes}</h3>
            <p>{description}</p>
            {completed ? <p>completed</p> : <p>Not Completed</p>}
        </div>
    )
}

export default Actions;