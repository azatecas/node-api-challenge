import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Projects from './Projects';

const ProjectsList = ({toggle}) => {
    const [project, setProjects ] = useState([])


    useEffect(() => {
        if (toggle) {
            axios
                .get('http://localhost:5005/api/projects')
                .then(res => {
                    console.log('this is res', res.data);
                    setProjects(res.data)
                })
                .catch(err => {
                    console.log('this is error',err);
                })
        }
    }, [toggle]);
    



    return (
        <>
        {project.map(item => (
            <Projects 
                key={item.id}
                name={item.name}
                description={item.description}
                completed={item.completed}
                 />
        ))}
        </>
    )
}

export default ProjectsList;