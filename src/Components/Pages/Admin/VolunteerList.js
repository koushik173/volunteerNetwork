import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import VolunteerEvents from './VolunteerEvents';

const VolunteerList = () => {
    const [events, setEvents] = useState([]);
    useEffect(()=>{
        const url =`http://localhost:5000/admin`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setEvents(data));
    },[])

    const handleListDelete = id =>{
        const process = window.confirm('Are you sure?')
        if(process){
            const url = `http://localhost:5000/admin/${id}`
            fetch(url,{
                method: 'DELETE'
            })
            .then(res=>res.json())
            .then(result=>{
                const remainWork = events.filter(ev=>ev._id != id);
                setEvents(remainWork);
            })
        }
    }
    return (
        <div className='m-3'>
            <h3>Volunteer List</h3>
            <Row className=' my-2 bg-secondary'>
                <Col>Name</Col>
                <Col>Email Id</Col>
                <Col>Register Date</Col>
                <Col>Events</Col>
                <Col>action</Col>
            </Row>
            {
                events.map(ev=><VolunteerEvents handleListDelete={handleListDelete} key={ev._id} event={ev}></VolunteerEvents>)
            }
        </div>
    );
};

export default VolunteerList;