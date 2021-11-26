import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css'
const Header = () => {
    const { user, logOut } = useAuth()
    return (
        <Navbar collapseOnSelect expand="lg" className="bg p-2 shadow sticky-top" variant="dark">
            <Container className="text-center">
                <Navbar.Brand as={Link} to="/home"><h2 className="text-dark">Pack And Go</h2> </Navbar.Brand>
                <Navbar.Toggle className="bg-dark" />
                <Navbar.Collapse className="justify-content-end">
                    <Nav.Link className="text-dark text-uppercase font-size border rounded me-3 mb-2" as={Link} to="/home">Home</Nav.Link>

                    <Nav.Link className="text-dark text-uppercase font-size border rounded me-3 mb-2" as={Link} to="/allPackage">All Package</Nav.Link>

                    {/* Dropdown menu  */}

                    {user?.email ? <div className=" btn-group ">
                        <Link to='' className="text-dark text-uppercase font-size" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                            <img className="rounded-circle" height="50px" src={user?.photoURL} alt="" />
                        </Link>

                        <ul className="dropdown-menu dropdown-menu-end " aria-labelledby="dropdownMenuLink">
                            <li><Nav.Link className="text-dark text-uppercase font-size" as={Link} to="/myBooking">My Booking</Nav.Link></li>

                            <li><Nav.Link className="text-dark text-uppercase font-size " as={Link} to="/addPackage">Add A Package</Nav.Link></li>

                            <li><Nav.Link className="text-dark text-uppercase font-size " as={Link} to="/manageAllBooking">Manage All Booking</Nav.Link></li>

                            <li><Button onClick={logOut} className="user text-dark" variant="light">Logout</Button></li>
                        </ul>
                    </div> : <Navbar.Text>
                        <button className="btn"><Nav.Link variant="light" className="btn btn-light user text-dark text-dark" as={Link} to="/login">Login</Nav.Link></button>
                    </Navbar.Text>}
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

export default Header;