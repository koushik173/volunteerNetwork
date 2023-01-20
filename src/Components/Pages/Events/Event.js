import React from 'react';
import { Button } from 'react-bootstrap';

const Event = (props) => {
    const {_id,work,photo,date,description}=props.event;
    
    return (
        <>
            <div className='border m-3 d-md-flex' style={{ width: '35rem' }}>
                <div className='p-3'>
                    <img style={{ width: '12rem' }} variant="top" src={photo} />
                </div>
                <div className='p-2'>
                    <h4>{work}</h4>
                    <p>{date}</p>
                    <p>{description}</p>
                    <Button onClick={()=>props.handleDelete(_id)} className='my-5'>Delete</Button>
                </div>
            </div>
            
        </>
    );
};

export default Event;