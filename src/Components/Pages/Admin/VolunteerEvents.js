import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Row } from 'react-bootstrap';

const VolunteerEvents = (props) => {
    const {_id,email,work,name,date} = props.event;
    // console.log(props);
    return (
        <>
            <Row>
                <Col>{name}</Col>
                <Col>{email}</Col>
                <Col>{date}</Col>
                <Col>{work}</Col>
                <Col><FontAwesomeIcon className='btn' onClick={()=>props.handleListDelete(_id)} icon={faDeleteLeft} /></Col>
            </Row>
        </>
    );
};

export default VolunteerEvents;