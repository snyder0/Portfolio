import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap'

function NavBar() {
    return (
        <div>
            <div className="collapse" id="navbarToggleExternalContent">
                <div className="bg-dark p-4">
                    <h4 className="text-white">Collapsed content</h4>
                    <span className="text-muted">Toggleable via the navbar brand.</span>
                </div>
            </div>
            <Navbar className="NavBar fixed-top" variant="dark">
                <Container className="Navbar-Links">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <Navbar.Brand href="#home">JDC</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="#home" >Home</Nav.Link>
                        <Nav.Link href="#aboutMe">About Me</Nav.Link>
                        <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavBar;
