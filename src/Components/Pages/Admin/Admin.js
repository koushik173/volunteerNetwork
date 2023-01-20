import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import PageTittle from '../../PageTittle/PageTittle';

const Admin = () => {
    return (
        <div className='m-3'>
            <PageTittle title='Admin'></PageTittle>
            <Row>
                <Col sm={2} className='p-5'>
                    <Link style={{ textDecoration: 'none' }} to='/admin/volunteerRegList'><h5>Volunteer Register list</h5></Link>
                    <Link style={{ textDecoration: 'none' }} to='/admin/addEvent'><h5>+ Add event</h5></Link>
                </Col>
                <Col sm={10} className='border-start'>
                    <Outlet></Outlet>
                </Col>
            </Row>
            
        </div>
    );
};

export default Admin;