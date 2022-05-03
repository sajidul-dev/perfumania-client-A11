import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="" variant="dark">
                <Container className='w-50'>
                    <NavLink to='/'
                        className={({ isActive }) => isActive ? 'text-primary mt-3 me-3' : 'text-dark mt-3 text-decoration-none'}
                    >
                        Home
                    </NavLink>
                    {/* <NavLink to="/" className={({ isActive }) => isActive ? 'text-red-500 mr-4 text-2xl underline underline-offset-8' : 'text-white-500 mr-4 text-2xl underline underline-offset-8'} >Home</NavLink> */}

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="">
                            <NavLink to='/blogs'
                                className={({ isActive }) => isActive ? 'text-primary  mt-3' : 'text-dark mt-3 text-decoration-none'}
                            >
                                Blogs
                            </NavLink>
                            <NavLink to='/about'
                                className={({ isActive }) => isActive ? 'text-primary  mt-3' : 'text-dark mt-3 text-decoration-none'}
                            >
                                About
                            </NavLink>

                        </Nav>
                        <NavLink to='/login'
                            className={({ isActive }) => isActive ? 'text-primary  mt-3' : 'text-dark mt-3 text-decoration-none'}
                        >
                            Login
                        </NavLink>


                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;