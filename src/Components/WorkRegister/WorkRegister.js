import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useParams } from 'react-router-dom';
import auth from '../../firebase.init';

const WorkRegister = () => {
    const [user] = useAuthState(auth);
    const {workId} = useParams()
    const [work,setWork] = useState([]);
    const [date, setDate] = useState(new Date());
    const navigate = useNavigate();

    useEffect(()=>{
        const url = `http://localhost:5000/works/${workId}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setWork(data));
    },[workId])

    const handleRegister = event=>{
        event.preventDefault();
        const volunteer ={
            name:user.displayName,
            email: user.email,
            work: work.name,
            workId: workId,
            photo: work.photo,
            phone: event.target.phone.value,
            date: event.target.datePic.value,
            description: event.target.description.value
        }
        // console.log(volunteer);
        const url = `http://localhost:5000/volunteer`
        fetch(url,{
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(volunteer)
        })
        .then(res=> res.json())
        .then(result=>{
            // console.log(result);
            if(result.insertedId){
                alert('SuccessFully Added as Volunteer')
                navigate('/home');
            }
        })
    }
    return (
        <div style={{ width: '35rem' }} className='mx-auto border p-5 my-5'>
            <h1 className='mb-4'>Register as a Volunteer</h1>
                        
            <form onSubmit={handleRegister}>
                <input className='w-100 mb-3' type="text" value={user?.displayName} name='name' placeholder='Full Name' disabled readOnly required/> <br />
                <input className='w-100 mb-3' type="email" value={user?.email} name='email' placeholder='Username or Email' disabled readOnly required/> <br />
                <input className='w-100 mb-3' type="text" value={work.name} name='work' disabled readOnly/> <br />

                <input className='w-100 mb-3' type="text" name='phone' placeholder='Phone' required/> <br />

                <input className='w-100 mb-3' type="date" name='datePic' placeholder='DateRange' value={date} onChange={(e) => setDate(e.target.value)} required/> <br />

                <textarea className='w-100 mb-3' type="text" name='description' placeholder='description' required/> <br />
                
                <input className=' w-50 btn btn-primary' type="submit" value='Place Order'/> <br />
            </form>
        </div>
    );
};

export default WorkRegister;