import React, { useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';

const AddEvent = () => {
    const [date, setDate] = useState(new Date());
    const handleSubmit=(event)=>{
        event.preventDefault();
        const newEvent={
            name: event.target.eventTitle.value,
            description: event.target.description.value,
            date: event.target.datepic.value,
            photo: event.target.picture.value
        }
        
        const url = `http://localhost:5000/newEvent`
        fetch(url,{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newEvent)
        })
        .then(res=>res.json())
        .then(result=>{
            if(result.insertedId){
                alert('SuccessFully Added as Volunteer')
                // navigate('/home');
                event.target.reset();   
            }
        })
    }
    return (
        <>
            <h3>Add Event</h3>
            <Form onSubmit={handleSubmit} className='w-75 m-5'>
                    <Row>
                        <Col>
                            <span>Event Title</span>
                            <input className='w-100 mb-3' type="text" name='eventTitle' placeholder='Event Title' required/> <br />
                            <span>Description</span>
                            <textarea className='w-100 mb-3' type="text" name='description' placeholder='Description' required/> <br />
                        </Col>
                        <Col>
                            <span>Event Date</span>
                            <input className='w-100 mb-3' type="date" name='datepic' placeholder='DateRange' value={date} onChange={(e) => setDate(e.target.value)}required/> <br />

                            <span>Picture</span>
                            <input className='w-100 mb-3' type="text" name='picture' placeholder='picture' required/> <br />

                        </Col>
                    </Row>
                    <input className=' w-25 btn btn-primary' type="submit" value='Submit'/>
                </Form>
        </>
    );
};

export default AddEvent;