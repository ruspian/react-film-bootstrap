import React from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap'

const NavBar = () => {
  return (
    <div>
        <Navbar variant='dark'>
        <Container>
            <Navbar.Brand href='/'>FILMS</Navbar.Brand>
            <Nav>
                <Nav.Link href='#tranding'>TRENDING</Nav.Link>
                <Nav.Link href='#superhero'>SUPERHERO</Nav.Link>
            </Nav>
        </Container>
        </Navbar>
    </div>
  )
}

export default NavBar
