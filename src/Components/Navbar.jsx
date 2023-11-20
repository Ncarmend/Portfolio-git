import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {  Outlet, Link} from 'react-router-dom'

function Mynavbar() {
    return (
        <>
            <Navbar bg="#3b344e" data-bs-theme="dark">
                <Container className='navbr'>
                    <Navbar.Brand href="#home">*</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link ><Link to = "/">Home</Link></Nav.Link>
                        <Nav.Link><Link to ="/competences">Competences</Link></Nav.Link>  
                        <Nav.Link><Link to ="/projects">Projects</Link> </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <Outlet />
        </>
    );
}

export default Mynavbar;