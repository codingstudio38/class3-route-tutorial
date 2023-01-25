import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../logo.svg';
import { NavLink, Link } from 'react-router-dom';
function NavScrollExample() {
    return (
        <Navbar bg="primary" variant="dark" expand="lg">
            <Container fluid>
                <Navbar.Brand href="/"> <img src={logo} className="App-logo" alt="logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        {/* style={({isActive})=>{return {color:isActive?'green':'black'}}} */}
                        <NavLink to="/" className='nav-link'>Home</NavLink>
                        <NavLink to="/about" className='nav-link'>About</NavLink>
                        <NavDropdown title="USER" id="navbarScrollingDropdown" >
                            <NavLink to="/user/vidyut/1" data-rr-ui-dropdown-item="" className='dropdown-item' role="button" >User Vidyut</NavLink>
                            <NavLink to="/user/bidyut/2" data-rr-ui-dropdown-item="" className='dropdown-item' role="button" >User Bidyut</NavLink>
                        </NavDropdown>
                        <NavLink to="/filter?age=60&type=itoks" className='nav-link' state={{ name: "vidyut", age: 23 }}>Filter</NavLink>
                        <NavDropdown title="API" id="navbarScrollingDropdown" >
                            <NavLink to="/apiclass1" data-rr-ui-dropdown-item="" className='dropdown-item' role="button" >Api GET Method</NavLink>
                            <NavLink to="/apiclass2" data-rr-ui-dropdown-item="" className='dropdown-item' role="button" >Api POST Method</NavLink>
                        </NavDropdown>
                        <NavLink to="/contact" className='nav-link'>Contact</NavLink>
                        <NavLink to="/login" className='nav-link'>Login</NavLink>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button style={{ backgroundColor: 'Green', color: 'white' }} variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
}

export default NavScrollExample;