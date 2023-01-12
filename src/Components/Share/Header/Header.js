import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
    const[user] = useAuthState(auth);
    const [textColor, setTextColor] = useState('');
    const handleTextColor=id=>{
        setTextColor(id);
    }
    
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand onClick={()=>setTextColor('')} as={Link} to="/">Volunteers Network</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link  className={textColor==1?'text-primary':''} onClick={()=>setTextColor(1)} as={Link} to={'/home'}>Home</Nav.Link>
                        <Nav.Link className={textColor==2?'text-primary':''} onClick={()=>setTextColor(2)} as={Link} to={'/donation'}>Donation</Nav.Link>
                        <Nav.Link className={textColor==3?'text-primary':''} onClick={()=>setTextColor(3)} as={Link} to={'/events'}>Events</Nav.Link>
                        <Nav.Link className={textColor==4?'text-primary':''} onClick={()=>setTextColor(4)} as={Link} to={'/blog'}>Blog</Nav.Link>
                        {
                            user? <Nav.Link className={textColor==5?'text-primary':''} onClick={()=>setTextColor(5)} as={Link} to={'/user'}>{user.displayName}</Nav.Link> : <Nav.Link className={textColor==6?'text-primary':''} onClick={()=>setTextColor(6)} as={Link} to={'/login'}>Login</Nav.Link>
                        }
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;