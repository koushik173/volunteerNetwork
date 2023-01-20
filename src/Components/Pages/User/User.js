import { signOut } from 'firebase/auth';
import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import PageTittle from '../../PageTittle/PageTittle';

const User = () => {
    const navigate = useNavigate();
    const logOut=()=>{
        localStorage.removeItem('accessToken');
        signOut(auth);
        navigate('/login')
    }

    return (
        <div>
            <PageTittle title='User'></PageTittle>
            <h2>this is user</h2>
            <footer><Button onClick={logOut}>LogOut</Button></footer>
        </div>
    );
};

export default User;