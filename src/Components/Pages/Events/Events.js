import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import PageTittle from '../../PageTittle/PageTittle';
import Event from './Event';

const Events = () => {
    const [events,setEvent] = useState([]);
    useEffect(()=>{
        const url = `http://localhost:5000/volunteers`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setEvent(data));
    },[])

    const handleDelete = id =>{
        const process = window.confirm('Are you sure?')
        if(process){
            const url = `http://localhost:5000/volunteers/${id}`
            fetch(url,{
                method: 'DELETE'
            })
            .then(res=>res.json())
            .then(result=>{
                const remainWork = events.filter(ev=>ev._id != id);
                setEvent(remainWork);
            })
        }
    }
    return (
        <>
            <PageTittle title='Events'></PageTittle>
            <Container>
                <Row>
                {
                    events.map(ev=><Event handleDelete={handleDelete} key={ev._id} event={ev}></Event>)
                }
                </Row>

            </Container>
            
            
        </>
    );
};

export default Events;