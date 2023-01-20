import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import PageTittle from '../../PageTittle/PageTittle';
import Event from './Event';

const Events = () => {
    const [events,setEvent] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(()=>{
        const email = user?.email;
        const url = `http://localhost:5000/volunteers?email=${email}`
        fetch(url,{
            method: 'GET',
            headers:{
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=>{
            if(res.status === 401 || res.status===403){
                signOut(auth);
                navigate('/login')
            }
            return res.json();
        })
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