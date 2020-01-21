import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap'

function NavBar() {
    return (
        <div>
            <div class="collapse" id="navbarToggleExternalContent">
                <div class="bg-dark p-4">
                    <h4 class="text-white">Collapsed content</h4>
                    <span class="text-muted">Toggleable via the navbar brand.</span>
                </div>
            </div>
            <Navbar className="NavBar" variant="dark">
                <Container className="Navbar-Links">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <Navbar.Brand href="#home">JDC</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="#home" >Home</Nav.Link>
                        <Nav.Link href="#aboutMe">About Me</Nav.Link>
                        <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                        <Nav.Link href="#gallery">Gallery</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavBar;
