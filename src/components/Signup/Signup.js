import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const Signup = () => {
    const nameRef = useRef('')
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";


    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });


    const [updateProfile, updating] = useUpdateProfile(auth);

    const handleSignup = async (e) => {
        e.preventDefault()
        const name = nameRef.current.value
        const email = emailRef.current.value
        const password = passwordRef.current.value
        console.log(name, email, password);
        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName: name })

    }
    if (loading || updating) {
        return <Loading></Loading>
    }
    if (user) {
        navigate(from, { replace: true });
        toast.success('Sign Up successful', { id: 'sajid' })
    }
    return (
        <div>
            <Form onSubmit={handleSignup} className='w-50 mx-auto mt-5'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control ref={nameRef} type="text" placeholder="Your Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary w-50 mx-auto d-block" type="submit">
                    Sign Up
                </Button>
            </Form>
            <p>Already in ... <Link to='/login'>Login</Link></p>
        </div>
    );
};

export default Signup;