import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const CustomNavbar: React.FC = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Link to="/" className='text-decoration-none'>
                    <Navbar.Brand>Chart Page</Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="v1" id="v1-dropdown">
                            <NavDropdown.Item as={Link} to={'/v1/pie'}>Pie Chart</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to={'/v1/bar'}>Bar Chart</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to={'/v1/input'}>Input Data</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="v2" id="v2-dropdown">
                            <NavDropdown.Item as={Link} to={'/v2/pie'}>Pie Chart</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to={'/v2/bar'}>Bar Chart</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to={'/v2/input'}>Input Data</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}