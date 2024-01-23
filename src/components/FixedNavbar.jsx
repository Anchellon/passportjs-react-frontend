import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

export default function FixedNavbar() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">My App</Navbar.Brand>
                <Nav>
                    <Nav.Link href="#home">Link 1</Nav.Link>
                </Nav>
                <Nav className="ms-auto">
                    <Nav.Link href="#home">Link 2</Nav.Link>
                    {/* <Nav.Link href="#features">Features</Nav.Link> */}
                    <Nav.Link href="#pricing">UserPersona</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}
