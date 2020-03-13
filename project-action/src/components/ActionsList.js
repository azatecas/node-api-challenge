import React, {useState, useEffect } from 'react';
import axios from 'axios';
import Actions from './Actions';

const ActionsList = ({toggle2}) => {
    const [actions, setActions ] = useState([]);

    useEffect(() => {
        if (toggle2) {
            axios
                .get('http://localhost:5005/api/actions')
                .then(res => {
                    console.log('this is actions', res.data);
                    setActions(res.data)
                })
                .catch(err => {
                    console.log('this is error',err);
                })
        }
    }, [toggle2]);



    return (
        <>
            {actions.map(item => (
                <Actions
                    notes={item.notes}
                    completed={item.completed}
                    description={item.description} 
                    key={item.id}/>
            ))}
        </>
    )
}

export default ActionsList;