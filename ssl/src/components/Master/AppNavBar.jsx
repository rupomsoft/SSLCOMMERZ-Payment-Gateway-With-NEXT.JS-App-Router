"use client";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Link from "next/link";
function AppNavBar() {
    return (
        <>
            <Navbar expand="lg" className="bg-white sticky-top shadow-sm">
                <div className="container">
                    <div className="navbar-brand">
                        <img className="nav-logo" src={"images/next.svg"} alt="img"/>
                    </div>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto ms-3 my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                            <Link className="nav-link f-13" href="/">Home</Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        </>
    );
}
export default AppNavBar;