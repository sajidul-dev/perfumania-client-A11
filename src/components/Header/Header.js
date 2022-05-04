import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth)

    const handleSignOut = () => {
        signOut(auth)
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <NavLink to='/'
                        style={({ isActive }) => {
                            return {
                                display: "block",
                                margin: "1rem 0",
                                color: isActive ? "red" : "",
                            };
                        }}
                    >
                        Home
                    </NavLink>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <NavLink
                                to='/blogs'
                                className={({ isActive }) => isActive ? 'text-primary' : 'text-white'}

                            >
                                Blogs
                            </NavLink>

                        </Nav>
                        <Nav>
                            <NavLink
                                to='/about'
                                style={({ isActive }) => {
                                    return {
                                        display: "block",
                                        margin: "1rem 0",
                                        color: isActive ? "##0D6EFD" : "white",
                                    };
                                }}

                            >
                                About
                            </NavLink>
                            {user ? <button onClick={handleSignOut} className='btn btn-primary'>Sign Out</button> : <NavLink
                                to='/login'
                                style={({ isActive }) => {
                                    return {
                                        display: "block",
                                        margin: "1rem 0",
                                        color: isActive ? "red" : "",
                                    };
                                }}

                            >
                                Login
                            </NavLink>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;