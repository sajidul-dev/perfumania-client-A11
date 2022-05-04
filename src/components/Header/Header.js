import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
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
                            <NavLink
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
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;