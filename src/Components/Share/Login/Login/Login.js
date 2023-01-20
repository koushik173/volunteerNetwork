import { faG } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';
import PageTittle from '../../../PageTittle/PageTittle';
import Loading from '../../Loading/Loading';

const Login = () => {
    const [signInWithGoogle,user,loading] = useSignInWithGoogle(auth);

    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const navigate = useNavigate();

    const handleSubmit = async()=>{
        await signInWithGoogle()

        const email = user?.user?.email;
        fetch('http://localhost:5000/login',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({email})
        })
        .then(res=>res.json())
        .then(data=>{
            localStorage.setItem('accessToken', data?.accessToken);
        })
        
    }

    if(user){
        navigate(from,{replace: true});
    }
    if(loading){
        return <Loading></Loading>
    }
    return (
        <>
            <PageTittle title='Login'></PageTittle>
            <Container className='my-5 p-lg-5 d-flex justify-content-center'>
                
            <Form className='border p-5'  style={{ width: '30rem' }}>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label><h3 className='text-dark mx-5 px-5'>Login with</h3></Form.Label>
                </Form.Group>
                <Button onClick={handleSubmit} style={{ width: '23rem' }} variant="outline-secondary"> <FontAwesomeIcon className='text-danger' icon={faG}/> Google</Button>
                <p className='mx-4 my-2'>Don't have account? <Link>Create account!</Link></p>
            </Form>
            </Container>

        </>
    );
};

export default Login;