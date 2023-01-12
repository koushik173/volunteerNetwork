import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Work from './Work';
// import './works.css';
const Works = () => {
    const [works,setWorks] = useState([]);
    useEffect(()=>{
        const url = `http://localhost:5000/works`
        fetch(url)
        .then(res=>res.json())
        .then(work=>setWorks(work));
    },[])
    return (
        <>
        <Container>
            <h1 className='text-center'>All Volunteers works </h1>
           <Row>
            {
                works.map(wk=><Work key={wk._id} work={wk}></Work>)
            }
           </Row>
        </Container>
            
        </>
    );
};

export default Works;