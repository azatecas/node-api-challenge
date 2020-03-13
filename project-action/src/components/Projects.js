
import React from 'react';

const Projects = ({name, description, completed}) => {
    return (
        <div className='card'>
            <h3>{name}</h3>
            <p>description</p>
            {completed ? <p>completed</p> : <p>Not Completed</p>}
        </div>
    )
}

export default Projects;