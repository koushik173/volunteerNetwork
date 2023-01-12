import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Work = (props) => {
    const {name,photo,_id} = props.work;
    const navigate =useNavigate();
    const navToWork=id=>{
        navigate(`/work/${id}`);
    }
    
    return (
        <>
             <div className='m-2' style={{ width: '18rem' }}>
                <img style={{ width: '18rem' }} variant="top" src={photo} />
                <Button onClick={()=>navToWork(_id)} style={{ width: '18rem' }} variant="primary" size="lg">{name}</Button>
            </div>
        </>
    );
};

export default Work;